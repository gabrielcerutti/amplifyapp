import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "./cardHeaderStyle";

const useStyles = makeStyles(styles);

export default function CardHeader(props) {
  const classes = useStyles();
  const { className, children, color, plain, stats, icon, ...rest } = props;

  /*
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderStats]: stats,
    [classes.cardHeaderIcon]: icon,
    [className]: className !== undefined
  });
  */

  //     <div className={cardHeaderClasses} {...rest}>
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}

/*
CardHeader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose"
  ]),
  plain: PropTypes.bool,
  stats: PropTypes.bool,
  icon: PropTypes.bool,
  children: PropTypes.node
};
*/