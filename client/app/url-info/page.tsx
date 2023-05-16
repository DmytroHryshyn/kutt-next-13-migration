'use client'
import { useSearchParams } from "next/navigation";
import React from "react";
import AppWrapper from "../../components/AppWrapper";
import Footer from "../../components/Footer";
import { H2, H4 } from "../../components/Text";
import { Col } from "../../components/Layout";

const UrlInfoPage = () => {
  const searchParams = useSearchParams();
  return (
    <AppWrapper>
      {!searchParams?.get("target") ? (
        <H2 my={4} light>
          404 | Link could not be found.
        </H2>
      ) : (
        <>
          <Col flex="1 1 100%" alignItems="center">
            <H2 my={3} light>
              Target:
            </H2>
            <H4 bold>{searchParams?.get("target")}</H4>
          </Col>
          <Footer />
        </>
      )}
    </AppWrapper>
  );
};
export default UrlInfoPage;
