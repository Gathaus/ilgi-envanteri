import React, { useEffect } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import EnhancedTable from "../../components/react-table/EnhancedTable";
import makeData from "./makeData";

const App = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Rumuz",
        accessor: "Rumuz",
      },
      {
        Header: "Yaş",
        accessor: "Yas",
      },
      {
        Header: "Cinsiyet",
        accessor: "Cinsiyet",
      },
      {
        Header: "Seçilen Puan Türü",
        accessor: "Soru1",
      },
      {
        Header: "Hissedilen Puan Türü",
        accessor: "Soru2",
      },
      {
        Header: "Lise Türü",
        accessor: "Soru3",
      },
      {
        Header: "Öğrenim Hedefi",
        accessor: "Soru4",
      },
      {
        Header: "Karşılaştırılmak İstenen Grup",
        accessor: "Soru5",
      },

    ],
    []
  );

  const [data, setData] = React.useState(React.useMemo(() => makeData(20), []));
  const [skipPageReset, setSkipPageReset] = React.useState(false);

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true);
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };


  useEffect(() => {
        fetch(
      "https://kisiselkureenvanteri.com/api/survey/getuserData"
    )
      .then((Response) => Response.json())
      .then((findresponse) => {
        setData(findresponse);
      });
  }, []);

  return (
    <div>
      <CssBaseline />
      <EnhancedTable
        columns={columns}
        data={data}
        setData={setData}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </div>
  );
};

export default App;
