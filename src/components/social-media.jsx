import { Facebook, Instagram, Mail, MapPinned, Twitter } from "lucide-react";
import Link from "next/link";

export const SocialMediaIcons = [
  {
    iconName: <Facebook />,
    iconHref: ""
  },
  {
    iconName: <Instagram />,
    iconHref: ""
  },
  {
    iconName: <Twitter />,
    iconHref: ""
  },
  {
    iconName: <Mail />,
    iconHref: ""
  },
  {
    iconName: <MapPinned />,
    iconHref: ""
  }
]

function SocialMedia() {
  return (
    <div className="flex items-center gap-3">
      {SocialMediaIcons.map((data, index) => (
        <Link key={index} href={data.iconHref} className="p-3 rounded-full text-white border border-[#c084fc] hover:bg-[#c084fc] hover:border-white transition-all duration-200">
          {data.iconName}
        </Link>
      ))}
    </div>


  )
}

export default SocialMedia