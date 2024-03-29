import React, { useState, useEffect } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button";
import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const [userCount, setUserCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    fetch("https://kisiselkureenvanteri.com/api/survey/userCount")
      .then((Response) => Response.json())
      .then((findresponse) => {
        setUserCount(findresponse[0].total);
      });

    fetch("https://kisiselkureenvanteri.com/api/survey/commentCount")
      .then((Response) => Response.json())
      .then((findresponse) => {
        setCommentCount(findresponse[0].total);
      });
  }, []);
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Toplam Kullanıcı Sayısı</p>
              <h3 className={classes.cardTitle}>{userCount}</h3>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Memnuniyet yorum sayısı</p>
              <h3 className={classes.cardTitle}>{commentCount}</h3>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Button
            color="success"
            href="https://kisiselkureenvanteri.com/api/survey/writeToExcel"
            target="_blank"
            fullWidth
          >
            Kullanıcı verilerini indir
          </Button>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Button
            color="success"
            href="https://kisiselkureenvanteri.com/api/survey/writeToExcelReport1"
            target="_blank"
            fullWidth
          >
            Sekiz Dilimli Ölçekler verilerini indir
          </Button>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Button
            color="success"
            href="https://kisiselkureenvanteri.com/api/survey/writeToExcelReport2"
            target="_blank"
            fullWidth
          >
            Saygınlık Ölçekleri verilerini indir
          </Button>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Button
            color="success"
            href="https://kisiselkureenvanteri.com/api/survey/writeToExcelReport3"
            target="_blank"
            fullWidth
          >
            Dört Kutuplu Ölçekler verilerini indir
          </Button>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Button
            color="success"
            href="https://kisiselkureenvanteri.com/api/survey/writeToExcelReport4"
            target="_blank"
            fullWidth
          >
            Altıgen Model Ölçekler verilerini indir
          </Button>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Button
            color="success"
            href="https://kisiselkureenvanteri.com/api/survey/writeToExcelReport5"
            target="_blank"
            fullWidth
          >
            Üç Boyutlu Ölçekler verilerini indir
          </Button>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Button
            color="success"
            href="https://kisiselkureenvanteri.com/api/survey/writeToExcelCommentData"
            target="_blank"
            fullWidth
          >
            MEMNUNİYET yorumları verilerini indir
          </Button>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Button color="success" href="https://kisiselkureenvanteri.com/api/survey/writeToExcelHosYap" target="_blank" fullWidth>
            KULLANICI RAPOR VERİLERİ İNDİR
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
