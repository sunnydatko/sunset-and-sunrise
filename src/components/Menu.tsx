// mui
import { IconButton, Button, makeStyles } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

// forms
import { Field, FieldArray, Formik, Form } from "formik";
import { FormTextField } from "./core/FormTextField";

// types
import { LatitudeAndLongitude } from "types/LatitudeAndLongitude";

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    padding: "8px 0",
  },
  locationRow: {
    display: "flex",
    gap: "12px",
    justifyContent: "space-between",
  },
  icon: {
    "&:hover": {
      backgroundColor: "transparent",
      color: theme.palette.secondary.main,
    },
  },
}));

const Menu = ({ setLocations }: any) => {
  const classes = useStyles();

  const initialValues = {
    locations: [
      {
        latitude: "",
        longitude: "",
      },
    ],
  };

  const handleSubmit = async (values: typeof initialValues) => {
    setLocations(values.locations);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }: any) => (
        <Form>
          <FieldArray
            name="locations"
            render={(arrayHelpers: any) => (
              <>
                {Boolean(values.locations.length) &&
                  values.locations.map(
                    (location: LatitudeAndLongitude, i: number) => (
                      <div className={classes.locationRow} key={i}>
                        <Field
                          component={FormTextField}
                          fullWidth
                          label="Latitude"
                          margin="dense"
                          name={`locations.${i}.latitude`}
                          variant="outlined"
                        ></Field>
                        <Field
                          component={FormTextField}
                          fullWidth
                          label="Longitude"
                          margin="dense"
                          name={`locations.${i}.longitude`}
                          variant="outlined"
                        ></Field>
                        <IconButton
                          className={classes.icon}
                          onClick={() => {
                            arrayHelpers.remove(i);
                          }}
                          size="small"
                        >
                          <Delete />
                        </IconButton>
                      </div>
                    )
                  )}
                <div className={classes.buttonContainer}>
                  <Button
                    color="secondary"
                    disabled={values.locations.length >= 5}
                    fullWidth
                    onClick={() => {
                      arrayHelpers.push({
                        latitude: "",
                        longitude: "",
                      });
                    }}
                    variant="outlined"
                  >
                    Add Location
                  </Button>
                  <Button
                    color="primary"
                    fullWidth
                    type="submit"
                    variant="contained"
                  >
                    Search
                  </Button>
                </div>
              </>
            )}
          />
        </Form>
      )}
    </Formik>
  );
};

export default Menu;
