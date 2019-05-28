/** React */
import React from "react";
import PropTypes from "prop-types";

/** MUI */
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import Chip from "@material-ui/core/Chip";

/** Others */
import clsx from "clsx";

/** Local */
import "../styles.css";

/** Styles */
const styles = {
  card: {
    minWidth: 275,
    width: "100%",
    marginBottom: "25px"
  },
  icoAdd: {
    margin: "0 5px 0 0",
    color: "green"
  },
  icoRemove: {
    margin: "0 5px 0 15px",
    color: "red"
  },
  icoFolder: {
    margin: "0 5px 0 0",
    color: "gray"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  labelFolder: {
    textTransform: "none"
  },
  helper: {
    borderLeft: "1px solid #E7E7E7",
    padding: 0,
    float: "left"
  },
  column: {
    float: "left",
    display: "block",
    margin: "0px 15px 15px 0px",
    padding: "5px 5px 5px 5px",
    minWidth: "33,3%",
    minHeight: 50
  },
  chip: {
    margin: "5px",
    fontSize: 12,
    padding: 0,
    height: 22
  }
};

function SimpleCard(props) {
  const { classes, nome, plano, classe, competencia, numero } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.column}>
            <Typography className={classes.title} color="textSecondary">
              <Icon className={classes.icoAdd} style={{ fontSize: 14 }}>
                add_circle
              </Icon>
              {nome} <b>+2</b>
              <Icon className={classes.icoRemove} style={{ fontSize: 14 }}>
                remove_circle
              </Icon>
              {plano}
            </Typography>

            <Typography style={{ fontSize: 14 }}>
              {classe} <strong>{competencia}</strong>
            </Typography>

            <Typography color="textSecondary">
              {numero}
              <Chip label="Justiça Gratuita" className={classes.chip} />
              <Chip label="Estatuto Idoso" className={classes.chip} />
            </Typography>
          </div>

          <div className={clsx(classes.column, classes.helper)}>
            <Button className={classes.labelFolder} size="small">
              <Icon className={classes.icoFolder} style={{ fontSize: 24 }}>
                folder_open
              </Icon>
              Abrir pasta
            </Button>
          </div>

          <div className={classes.column}>
            <div className={clsx(classes.column, classes.helper)}>
              <Button className={classes.labelFolder} size="small">
                <Icon className={classes.icoFolder} style={{ fontSize: 24 }}>
                  label
                </Icon>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

Card.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
