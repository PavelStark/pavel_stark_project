import React, { useEffect } from "react";
import SingleProductContainer from "../../components/7_SigleProductContainer";
import BreadCrumbs from "../../components/9_Breadcrumps";

export default function SigleProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <BreadCrumbs />
      <SingleProductContainer />
    </div>
  );
}
