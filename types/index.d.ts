declare interface GetConnectedProps {
  trigger: React.ReactNode
  defaultTariffs?: string
  allTariffs?: string[]
  className?: string
}

declare interface Story {
  id: string;
  title: string;
  teaser: string;
  full: string;
  img: string;
  region: string;
  category: string;
  date: string;
}