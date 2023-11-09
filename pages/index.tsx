import Container from "@mui/material/Container";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import TranslateWrapper from "../src/components/indexComp/TranslateWrapper";
import {
  ChangeEvent,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import translationText, {
  TransList,
  TranslationText,
} from "../src/components/indexComp/fixedData";
import ListTranslateView from "../src/components/indexComp/ListTranslateView";

export const HomeContext = createContext<any>({});
export default function Home() {
  const [transList, setTransList] = useState<TranslationText | null>(null);
  useEffect(() => {
    localStorage.setItem("historyTrans", `${JSON.stringify(translationText)}`);
    setTransList(translationText);
  }, []);

  const [displayText, setDisplayText] = useState<{
    id: number | string;
    origin: string;
    trans: string;
  }>({
    id: '',
    origin: "",
    trans: "",
  });

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDisplayText({
      ...displayText,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateList = (listItem: TransList) => {
    let newList = {
      ...transList,
      [listItem.origin]: {...listItem},
    };
    setTransList(newList);
    return localStorage.setItem("historyTrans", `${JSON.stringify(newList)}`);
  };

  const value = useMemo(() => {
    return {
      displayText,
      handleChange,
      setDisplayText,
      handleUpdateList,
      transList
    };
  }, [displayText, handleChange, setDisplayText, handleUpdateList,transList]);

  return (
    <HomeContext.Provider value={value}>
      <Container maxWidth="xl">
        <TranslateWrapper />
        <ListTranslateView />
      </Container>
    </HomeContext.Provider>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
