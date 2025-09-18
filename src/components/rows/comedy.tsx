import RowTemplate from "./rowTemplates";

type CategoryItem = {
  endpoint: string;
};

const Comedy: React.FC<CategoryItem> = ({ endpoint }) => {
  return <RowTemplate category={"Comedy"} endpoint={endpoint} />;
};

export default Comedy;
