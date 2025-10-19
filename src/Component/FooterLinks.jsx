import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

export default function FooterLinks({ footerLinks }) {
  return (
    <>
      <Grid container spacing={5} sx={{ py: { xs: 2, md: 5 }}}>
        {footerLinks.map((footerLink, idx) => (
          <Grid item className='footerLink-box' key={idx} size={{ xs: footerLink.xs, sm: footerLink.sm, md: footerLink.md }}>
            <Link className='footerLink-box-label'>{footerLink.label}</Link>
            {footerLink.pages.map((page, idx) => (
                <Link className='footerLink-box-pages' to={page.path} key={idx}>{page.label}</Link>
            ))}
          </Grid>
        ))}
      </Grid>
    </>
  );
}
