import RowTemplate from "./rowTemplates";

type CategoryItem = {
  endpoint: string;
};

const Action: React.FC<CategoryItem> = ({ endpoint }) => {
  return <RowTemplate category={"Action and Adventure"} endpoint={endpoint} />;
};

export default Action;
