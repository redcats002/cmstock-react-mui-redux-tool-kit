import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import { User } from "../../../types/user.type";
type Props = {};

export default function RegisterPage({}: Props) {
  const navigate = useNavigate();

  const showForm = ({
    handleSubmit,
    handleChange,
    values,
    isSubmitting,
  }: FormikProps<User>) => {
    return (
      <Card sx={{ padding: 4 }} raised>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            onChange={handleChange}
            value={values.username}
            autoComplete="email"
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            onChange={handleChange}
            value={values.password}
            type="password"
          />
          <br />

          <Stack direction="row" spacing={2}>
            <Button
              onClick={() => navigate("/login")}
              type="button"
              fullWidth
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Create
            </Button>
          </Stack>
        </form>
      </Card>
    );
  };

  const initalValue: User = { username: "", password: "" };

  return (
    <>
      <Typography gutterBottom variant="h4" component="h2">
        RegisterPage
      </Typography>
      <Formik
        initialValues={initalValue}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values));
          setTimeout(() => {
            setSubmitting(false);
          }, 2000);
        }}
      >
        {(props) => showForm(props)}
      </Formik>
    </>
  );
}
