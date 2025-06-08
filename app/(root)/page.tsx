import Image from "next/image";
import { SearchForm } from "../../components/SearchForm";
import { StartupCardType } from "../../components/StartupCardType";
// import {client} from "@/sanity/lib/client"; 
import { STARTUP_QUERY } from "@/sanity/lib/query";
import { sanityFetch,SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";


type posttype = {
  _createdAt: string,
  view: number,
  author: {_id: number ,name: string},
  _id: number,
  description: string,
  image: string,
  category: string,
  title: string,
}


export default async function Home({searchParams}:{searchParams: Promise<{query?: string}>}) {
  const query = (await searchParams).query;
  const params = {search: query || null}; 

  const session = await auth();
  // If you want to access the custom 'id' property on session, use session.id
  console.log(session?.id);

  // const posts = await client.fetch(STARTUP_QUERY)
  const {data: posts} = await sanityFetch({query: STARTUP_QUERY,params})
  // console.log("posts:",(posts));


  // const posts = [{
  //   _createdAt: 'Yesterday',
  //   views: 55,
  //   author: {_id:1,name:"John"},
  //   _id:1,
  //   description: "This is the description",
  //   image:"https://images.unsplash.com/photo-1747134392471-831ea9a48e1e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   category: "Robots",
  //   title: "We Robots",
  // }]


  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading ">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query}/>
      </section>

      <section className="section_container">
        <p className="text-3xl font-semibold">
          {query ? `search results for "${query}"` : 'All startups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts.length>0 ? (
            posts.map((post:posttype,index:number)=>(
              <StartupCardType key={post?._id} post={post}/>
            ))
          ):(
            <p className="no-results">No Startups found</p>
          )}
        </ul>
      </section>

      <SanityLive/>
    </>
  );
}
