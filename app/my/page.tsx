import { Client } from "../../components/my/Client";
import { placeHolder } from "@/lib/img";

export default async function IndexPage() {
  const placeHolderBase64 = placeHolder;

  const data = {
    avatar: "https://source.unsplash.com/360x360/?mountains",
    nickName: "Anderson anding",
    userName: "Jose O'Conner",
    ip: "陕西",
    following: 203,
    followers: 22203,
    interactions: 203,
  };

  const prodcastsImages = [
    "https://source.unsplash.com/128x128/?nature",
    "https://source.unsplash.com/128x128/?city",
    "https://source.unsplash.com/128x128/?food",
    "https://source.unsplash.com/128x128/?animals",
    "https://source.unsplash.com/128x128/?travel",
    "https://source.unsplash.com/128x128/?architecture",
    "https://source.unsplash.com/128x128/?technology",
    "https://source.unsplash.com/128x128/?music",
    "https://source.unsplash.com/128x128/?sports",
    "https://source.unsplash.com/128x128/?art",
    "https://source.unsplash.com/128x128/?fashion",
    "https://source.unsplash.com/128x128/?cars",
    "https://source.unsplash.com/128x128/?books",
    "https://source.unsplash.com/128x128/?fitness",
    "https://source.unsplash.com/128x128/?mountains",
    "https://source.unsplash.com/128x128/?beach",
    "https://source.unsplash.com/128x128/?dogs",
    "https://source.unsplash.com/128x128/?cats",
    "https://source.unsplash.com/128x128/?wildlife",
    "https://source.unsplash.com/128x128/?sunsets",
  ];

  const imagesList = [
    [
      "https://source.unsplash.com/403x538/?music",
      "https://source.unsplash.com/403x538/?nature",
      "https://source.unsplash.com/403x538/?sports",
      "https://source.unsplash.com/403x538/?books",
      "https://source.unsplash.com/403x538/?art",
      "https://source.unsplash.com/403x538/?architecture",
      "https://source.unsplash.com/403x538/?fashion",
      "https://source.unsplash.com/403x538/?beach",
      "https://source.unsplash.com/403x538/?cars",
      "https://source.unsplash.com/403x538/?city",
      "https://source.unsplash.com/403x538/?food",
      "https://source.unsplash.com/403x538/?technology",
      "https://source.unsplash.com/403x538/?animals",
      "https://source.unsplash.com/403x538/?dogs",
      "https://source.unsplash.com/403x538/?fitness",
      "https://source.unsplash.com/403x538/?travel",
      "https://source.unsplash.com/403x538/?mountains",
    ],
    [
      "https://source.unsplash.com/403x538/?technology",
      "https://source.unsplash.com/403x538/?music",
      "https://source.unsplash.com/403x538/?sports",
      "https://source.unsplash.com/403x538/?art",
      "https://source.unsplash.com/403x538/?fashion",
      "https://source.unsplash.com/403x538/?cars",
      "https://source.unsplash.com/403x538/?books",
      "https://source.unsplash.com/403x538/?architecture",
      "https://source.unsplash.com/403x538/?fitness",
      "https://source.unsplash.com/403x538/?nature",
      "https://source.unsplash.com/403x538/?city",
      "https://source.unsplash.com/403x538/?food",
      "https://source.unsplash.com/403x538/?animals",
      "https://source.unsplash.com/403x538/?mountains",
      "https://source.unsplash.com/403x538/?beach",
      "https://source.unsplash.com/403x538/?dogs",
      "https://source.unsplash.com/403x538/?travel",
    ],
    [
      "https://source.unsplash.com/403x538/?nature",
      "https://source.unsplash.com/403x538/?city",
      "https://source.unsplash.com/403x538/?food",
      "https://source.unsplash.com/403x538/?animals",
      "https://source.unsplash.com/403x538/?mountains",
      "https://source.unsplash.com/403x538/?beach",
      "https://source.unsplash.com/403x538/?dogs",
      "https://source.unsplash.com/403x538/?travel",
      "https://source.unsplash.com/403x538/?architecture",
      "https://source.unsplash.com/403x538/?technology",
      "https://source.unsplash.com/403x538/?music",
      "https://source.unsplash.com/403x538/?sports",
      "https://source.unsplash.com/403x538/?art",
      "https://source.unsplash.com/403x538/?fashion",
      "https://source.unsplash.com/403x538/?cars",
      "https://source.unsplash.com/403x538/?books",
      "https://source.unsplash.com/403x538/?fitness",
    ],
  ];

  return (
    <Client {...{ data, prodcastsImages, imagesList, placeHolderBase64 }} />
  );
}
