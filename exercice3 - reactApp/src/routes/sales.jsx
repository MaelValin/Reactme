
import Team from "../ui/Team/index.jsx";
import Testimonial from "../ui/Testimonial/index.jsx";
import {fetchOurTeams} from "../lib/loaders.js";
import {fetchTestimonialData} from "../lib/loaders.js";
import {useLoaderData, defer, Await} from "react-router-dom";
import { Suspense } from "react";
import TeamSkeleton from "../ui/Team/TeamSkeleton.jsx";

export async function loader({params}) {
  const teamdata= fetchOurTeams(params.teamName);
  const testimonialdata=await fetchTestimonialData(params.teamName);
  return defer({team:teamdata, testimonial:testimonialdata});
  
  
}



export default function Sales() {
 const data = useLoaderData();
 

  return (
    <>
    <Suspense fallback={<TeamSkeleton />}>
    <Await resolve={data.team} errorElement={<div>error</div>}>
      {teamdata => <Team {...teamdata} /> }
      </Await>
      </Suspense>
      <Testimonial data={data.testimonial} />
    
    </>
  );
}
