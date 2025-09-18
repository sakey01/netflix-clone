import RowTemplate from "./rowTemplate";

type CategoryItem = {
  endpoint: string;
};

const Comedy: React.FC<CategoryItem> = ({ endpoint }) => {
  return <RowTemplate category={"Comedy"} endpoint={endpoint} />;
};

export default Comedy;
