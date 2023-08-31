import { useEffect, useState } from "react";

type Props = {};

function MVCPage({}: Props) {
  const [pageContent, setPageContent] = useState("");
  const [scriptContent, setScriptContent] = useState("");

  useEffect(() => {
    // axios
    //   .get("http://localhost:5013/", {
    //     headers: { Authorization: "Authorization DENEME" },
    //   })
    //   .then((response) => {
    //     const parser = new DOMParser();
    //     const parsedDocument = parser.parseFromString(
    //       response.data,
    //       "text/html"
    //     );
    //     const mvcContentElement = parsedDocument.getElementById("mvc-content");
    //     if (mvcContentElement) {
    //       // setPageContent(mvcContentElement?.innerHTML);
    //     }
    //     setPageContent(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, []);

  return (
    <div>
      {/* <div dangerouslySetInnerHTML={{ __html: pageContent }} /> */}
      <iframe
        src="http://localhost:5013/" // MVC uygulamanızın URL'sini buraya ekleyin
        title="MVC Uygulaması"
        width="100%"
        height="500"
        frameBorder="0"
      />
    </div>
  );
}

export default MVCPage;
