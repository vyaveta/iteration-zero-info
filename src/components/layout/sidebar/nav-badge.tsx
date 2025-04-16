import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";

export const NavBadge = ({ children }: { children: ReactNode }) => (
    <Badge className='rounded-full px-1 py-0 text-xs'>{children}</Badge>
  )