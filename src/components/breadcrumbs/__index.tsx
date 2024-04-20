import Link from "next/link";

type BreadcrumbsType = {
  title: string;
  link?: string;
  id: string;
};

export function Breadcrumbs(props: BreadcrumbsType): JSX.Element {
  return (
    <div className="flex flex-wrap py-5">
      <Link href={`${props.link}`}>
        <h2 className="text-subtitle">{props.title}</h2>
      </Link>
      <h2 className="text-subtitle mx-3">/</h2>
      <h2 className="text-title">{props.id}</h2>
    </div>
  );
}
