type IProps = {
  title: string;
};

function PageTitle({ title }: IProps) {
  return <div className="text-4xl font-bold text-gray-100">{title}</div>;
}

export default PageTitle;
