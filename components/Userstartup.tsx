import React from "react";
import { client } from "@/sanity/lib/client";
import { STARTUP_BY_AUTHOR_QUERY } from "@/sanity/lib/query";
import { StartupCardType, posttype } from "./StartupCardType";

const Userstartup = async ({ id }: { id: string }) => {
  const startups: posttype[] = await client.fetch(STARTUP_BY_AUTHOR_QUERY, { id });

  return (
    <div className="mt-5">
      {startups.length > 0 ? (
        <div className="flex flex-col gap-6">
          {startups.map((startup) => (
            <StartupCardType key={startup._id} post={startup} />
          ))}
        </div>
      ) : (
        <p>No startups found.</p>
      )}
    </div>
  );
};

export default Userstartup;
