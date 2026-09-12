declare module "lucide-react" {
  import type { ComponentType, SVGProps } from "react";

  type Icon = ComponentType<
    SVGProps<SVGSVGElement> & { size?: string | number; strokeWidth?: string | number }
  >;

  export const ArrowRight: Icon;
  export const ArrowUpRight: Icon;
  export const Download: Icon;
  export const GraduationCap: Icon;
  export const Mail: Icon;
  export const Menu: Icon;
  export const Trophy: Icon;
  export const X: Icon;
}
