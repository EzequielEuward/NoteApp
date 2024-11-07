import { Card, CardContent, Typography, Grid } from '@mui/material';

export const TodoStats = ({ total, completed, pending }) => (
  <Grid container spacing={2} justifyContent="center">
    <Grid item xs={12} sm={4}>
      <Card sx={{ textAlign: 'center' }}>
        <CardContent>
          <Typography variant="subtitle1">Totales</Typography>
          <Typography variant="h4" color="primary">{total}</Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Card sx={{ textAlign: 'center' }}>
        <CardContent>
          <Typography variant="subtitle1">Completadas</Typography>
          <Typography variant="h4" color="success.main">{completed}</Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Card sx={{ textAlign: 'center' }}>
        <CardContent>
          <Typography variant="subtitle1">Pendientes</Typography>
          <Typography variant="h4" color="warning.main">{pending}</Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

export default TodoStats;
