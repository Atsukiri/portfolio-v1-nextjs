export default function CommissionBox() {
  return (
    <div className="p-4 rounded-lg">
      <p className="text-secondary fs-5 mb-0">
        I’m currently open to free critiques and occasional commissions.
      </p>
      <div className="mt-4">
        <a 
          href="mailto:milan.avorque@gmail.com" 
          className="text-primary fw-bold text-decoration-none hover:underline"
          style={{ fontSize: '1.25rem' }}
        >
          Email me for details &rarr;
        </a>
      </div>
    </div>
  );
}
  