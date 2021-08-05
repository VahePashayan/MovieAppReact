import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        backgroundColor: "#4d774e",
        display: 'flex',
        justifyContent: 'center',
      },
  
  }));

  const PaginationComp = () => {

    const classes = useStyles();

      return ( <div className={classes.root}>
        <Pagination count={500} className={classes.pageNum}/>
      </div> );
  }
   
  export default PaginationComp;