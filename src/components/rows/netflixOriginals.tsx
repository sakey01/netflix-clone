import RowTemplate from "./rowTemplates";

type CategoryItem = {
  endpoint: string;
};

const NetflixOriginal: React.FC<CategoryItem> = ({ endpoint }) => {
  return <RowTemplate category={"NETFLIX ORIGINALS"} endpoint={endpoint} />;
};

export default NetflixOriginal;
