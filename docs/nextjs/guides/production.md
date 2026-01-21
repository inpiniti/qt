
# Production Checklist

Before going to production:

1. **Build**: Run `next build` to ensure no errors.
2. **Caching**: Verify caching headers and revalidation strategies.
3. **Error Handling**: Ensure `error.js` and `global-error.js` are set up.
4. **Metadata**: Check titles, descriptions, and OG images.
5. **Performance**: Run Lighthouse or use `useReportWebVitals`.
6. **Environment Variables**: Ensure all production secrets are set.
7. **Security**: Review headers and Content Security Policy.
