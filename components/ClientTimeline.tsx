"use client";

import dynamic from "next/dynamic";

const TimelineTeaser = dynamic(() => import("../components/TimelineTeaser"), {
  ssr: false,
});

export default function ClientTimeline() {
  return <TimelineTeaser />;
}
