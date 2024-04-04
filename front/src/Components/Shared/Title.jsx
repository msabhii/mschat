import { Helmet } from "react-helmet-async";

const Title = ({
  title = "mschat", //* This is the default title
  description = "This is chap app called mschat", //* This is the default Description
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};
export default Title;
//* Helmet is used to display the title of the page dicnamiclly.
