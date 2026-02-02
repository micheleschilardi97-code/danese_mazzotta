export default function NotFound() {
  return (
    <div style={{
      minHeight: 'calc(100vh - 80px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-surface)',
      padding: 'var(--space-8) var(--space-4)',
      textAlign: 'center'
    }}>
      <div>
        <h1 style={{
          fontSize: 'var(--text-hero)',
          fontWeight: '800',
          marginBottom: 'var(--space-4)',
          color: 'var(--color-accent)'
        }}>
          404
        </h1>
        <h2 style={{
          fontSize: 'var(--text-2xl)',
          marginBottom: 'var(--space-4)',
          color: 'var(--color-text-primary)'
        }}>
          Pagina Non Trovata
        </h2>
        <p style={{
          fontSize: 'var(--text-base)',
          color: 'var(--color-text-secondary)',
          marginBottom: 'var(--space-6)'
        }}>
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <a href="/" className="btn-primary">
          Torna alla Home
        </a>
      </div>
    </div>
  );
}
