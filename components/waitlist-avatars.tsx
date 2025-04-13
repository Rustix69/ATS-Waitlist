"use client"

import { useState, useEffect } from "react"

interface AvatarProps {
  initials: string;
  index: number;
}

function Avatar({ initials, index }: AvatarProps) {
  const colors = [
    'bg-purple-600', // First avatar
    'bg-blue-600',   // Second avatar
    'bg-blue-700',   // Third avatar
  ];

  return (
    <div className={`w-10 h-10 rounded-full border border-white/20 ${colors[index]} flex items-center justify-center text-white font-semibold text-sm`}>
      {initials}
    </div>
  )
}

export default function WaitlistAvatars() {
  const [waitlistCount, setWaitlistCount] = useState(103);

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="flex -space-x-2 mr-4">
        <Avatar initials="JD" index={0} />
        <Avatar initials="AS" index={1} />
        <Avatar initials="MK" index={2} />
      </div>
      <p className="text-white font-semibold">{waitlistCount}+ people on the waitlist</p>
    </div>
  )
} 