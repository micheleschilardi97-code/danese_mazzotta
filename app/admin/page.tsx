'use client';

import { useState, useMemo } from 'react';
import styles from './Dashboard.module.css';

/* ═══════════════════════════════════════════
   Types
   ═══════════════════════════════════════════ */

type BookingStatus = 'confermato' | 'in-attesa' | 'completato' | 'cancellato';

interface Booking {
  id: string;
  paziente: string;
  telefono: string;
  email: string;
  servizio: string;
  data: string;
  ora: string;
  stato: BookingStatus;
  note?: string;
  primaVisita: boolean;
}

/* ═══════════════════════════════════════════
   Sample Data
   ═══════════════════════════════════════════ */

const BOOKINGS: Booking[] = [
  {
    id: 'PR-001',
    paziente: 'Maria Rossi',
    telefono: '+39 333 123 4567',
    email: 'maria.rossi@email.it',
    servizio: 'Prima Visita Gratuita',
    data: '2026-02-16',
    ora: '09:30',
    stato: 'confermato',
    primaVisita: true,
    note: 'Paziente interessata a implantologia.',
  },
  {
    id: 'PR-002',
    paziente: 'Giuseppe Ferraro',
    telefono: '+39 347 987 6543',
    email: 'g.ferraro@gmail.com',
    servizio: 'Impianto Dentale',
    data: '2026-02-16',
    ora: '10:30',
    stato: 'confermato',
    primaVisita: false,
  },
  {
    id: 'PR-003',
    paziente: 'Anna Longo',
    telefono: '+39 320 456 7890',
    email: 'anna.longo@outlook.it',
    servizio: 'Sbiancamento Professionale',
    data: '2026-02-16',
    ora: '11:30',
    stato: 'in-attesa',
    primaVisita: false,
    note: 'Richiesta conferma telefonica.',
  },
  {
    id: 'PR-004',
    paziente: 'Luca De Marco',
    telefono: '+39 338 222 1111',
    email: 'luca.demarco@email.it',
    servizio: 'Pulizia Dentale',
    data: '2026-02-16',
    ora: '15:00',
    stato: 'confermato',
    primaVisita: false,
  },
  {
    id: 'PR-005',
    paziente: 'Francesca Moretti',
    telefono: '+39 345 678 9012',
    email: 'f.moretti@gmail.com',
    servizio: 'Prima Visita Gratuita',
    data: '2026-02-17',
    ora: '09:00',
    stato: 'confermato',
    primaVisita: true,
    note: 'Paziente con ansia dentale — procedere con calma.',
  },
  {
    id: 'PR-006',
    paziente: 'Marco Bianchi',
    telefono: '+39 389 111 2233',
    email: 'marco.bianchi@pec.it',
    servizio: 'Chirurgia Orale',
    data: '2026-02-17',
    ora: '10:00',
    stato: 'in-attesa',
    primaVisita: false,
    note: 'In attesa di radiografie esterne.',
  },
  {
    id: 'PR-007',
    paziente: 'Elena Conte',
    telefono: '+39 342 555 6677',
    email: 'elena.conte@email.it',
    servizio: 'Impianto Dentale',
    data: '2026-02-17',
    ora: '11:30',
    stato: 'confermato',
    primaVisita: false,
  },
  {
    id: 'PR-008',
    paziente: 'Roberto Giordano',
    telefono: '+39 331 888 9900',
    email: 'r.giordano@gmail.com',
    servizio: 'Laser Terapia',
    data: '2026-02-18',
    ora: '09:30',
    stato: 'confermato',
    primaVisita: false,
  },
  {
    id: 'PR-009',
    paziente: 'Sara Vitale',
    telefono: '+39 366 444 5566',
    email: 'sara.v@outlook.it',
    servizio: 'Prima Visita Gratuita',
    data: '2026-02-18',
    ora: '15:30',
    stato: 'in-attesa',
    primaVisita: true,
  },
  {
    id: 'PR-010',
    paziente: 'Antonio Colombo',
    telefono: '+39 329 777 8899',
    email: 'a.colombo@email.it',
    servizio: 'Protesi Dentale',
    data: '2026-02-14',
    ora: '10:00',
    stato: 'completato',
    primaVisita: false,
    note: 'Protesi superiore completata — controllo tra 2 settimane.',
  },
  {
    id: 'PR-011',
    paziente: 'Giulia Romano',
    telefono: '+39 348 333 4455',
    email: 'giulia.romano@gmail.com',
    servizio: 'Pulizia Dentale',
    data: '2026-02-13',
    ora: '11:00',
    stato: 'completato',
    primaVisita: false,
  },
  {
    id: 'PR-012',
    paziente: 'Davide Mancini',
    telefono: '+39 335 666 7788',
    email: 'd.mancini@email.it',
    servizio: 'Prima Visita Gratuita',
    data: '2026-02-12',
    ora: '09:00',
    stato: 'cancellato',
    primaVisita: true,
    note: 'Cancellato dal paziente — riprogrammare.',
  },
];

/* ═══════════════════════════════════════════
   Helpers
   ═══════════════════════════════════════════ */

const STATUS_META: Record<BookingStatus, { label: string; color: string }> = {
  confermato: { label: 'Confermato', color: 'green' },
  'in-attesa': { label: 'In Attesa', color: 'amber' },
  completato: { label: 'Completato', color: 'blue' },
  cancellato: { label: 'Cancellato', color: 'red' },
};

function formatDate(iso: string): string {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('it-IT', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
}

function isToday(iso: string): boolean {
  const today = new Date();
  const d = new Date(iso + 'T00:00:00');
  return (
    d.getDate() === today.getDate() &&
    d.getMonth() === today.getMonth() &&
    d.getFullYear() === today.getFullYear()
  );
}

/* ═══════════════════════════════════════════
   Component
   ═══════════════════════════════════════════ */

export default function AdminDashboard() {
  const [filterStatus, setFilterStatus] = useState<BookingStatus | 'tutti'>('tutti');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return BOOKINGS.filter((b) => {
      const matchesStatus = filterStatus === 'tutti' || b.stato === filterStatus;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        b.paziente.toLowerCase().includes(q) ||
        b.servizio.toLowerCase().includes(q) ||
        b.id.toLowerCase().includes(q);
      return matchesStatus && matchesSearch;
    }).sort((a, b) => {
      // Sort: upcoming first, then by date+time
      const dateA = new Date(`${a.data}T${a.ora}`);
      const dateB = new Date(`${b.data}T${b.ora}`);
      return dateA.getTime() - dateB.getTime();
    });
  }, [filterStatus, searchQuery]);

  // Stats
  const stats = useMemo(() => {
    const today = BOOKINGS.filter((b) => isToday(b.data) && b.stato !== 'cancellato');
    const pending = BOOKINGS.filter((b) => b.stato === 'in-attesa');
    const confirmed = BOOKINGS.filter((b) => b.stato === 'confermato');
    const primeVisite = BOOKINGS.filter((b) => b.primaVisita && b.stato !== 'cancellato');
    return {
      today: today.length,
      pending: pending.length,
      confirmed: confirmed.length,
      primeVisite: primeVisite.length,
    };
  }, []);

  return (
    <div className={styles.page}>
      {/* Sidebar / Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.brand}>
            <div className={styles.brandIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <div>
              <h1 className={styles.brandTitle}>Dashboard Prenotazioni</h1>
              <p className={styles.brandSub}>Danese-Mazzotta — Area Riservata</p>
            </div>
          </div>

          <div className={styles.headerRight}>
            <span className={styles.todayLabel}>
              {new Date().toLocaleDateString('it-IT', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <div className={styles.avatar}>MG</div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        {/* Stats Cards */}
        <section className={styles.statsGrid}>
          <div className={`${styles.statCard} ${styles.statToday}`}>
            <div className={styles.statIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <div className={styles.statData}>
              <span className={styles.statNumber}>{stats.today}</span>
              <span className={styles.statLabel}>Oggi</span>
            </div>
          </div>

          <div className={`${styles.statCard} ${styles.statPending}`}>
            <div className={styles.statIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <div className={styles.statData}>
              <span className={styles.statNumber}>{stats.pending}</span>
              <span className={styles.statLabel}>In Attesa</span>
            </div>
          </div>

          <div className={`${styles.statCard} ${styles.statConfirmed}`}>
            <div className={styles.statIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div className={styles.statData}>
              <span className={styles.statNumber}>{stats.confirmed}</span>
              <span className={styles.statLabel}>Confermati</span>
            </div>
          </div>

          <div className={`${styles.statCard} ${styles.statFirst}`}>
            <div className={styles.statIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <div className={styles.statData}>
              <span className={styles.statNumber}>{stats.primeVisite}</span>
              <span className={styles.statLabel}>Prime Visite</span>
            </div>
          </div>
        </section>

        {/* Toolbar */}
        <section className={styles.toolbar}>
          <div className={styles.searchBox}>
            <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Cerca paziente, servizio o ID..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className={styles.filters}>
            {(['tutti', 'confermato', 'in-attesa', 'completato', 'cancellato'] as const).map(
              (status) => (
                <button
                  key={status}
                  className={`${styles.filterBtn} ${filterStatus === status ? styles.filterActive : ''}`}
                  onClick={() => setFilterStatus(status)}
                >
                  {status === 'tutti'
                    ? 'Tutti'
                    : STATUS_META[status].label}
                  {status !== 'tutti' && (
                    <span className={`${styles.filterCount} ${styles[`count_${STATUS_META[status].color}`]}`}>
                      {BOOKINGS.filter((b) => b.stato === status).length}
                    </span>
                  )}
                </button>
              )
            )}
          </div>
        </section>

        {/* Bookings Table */}
        <section className={styles.tableSection}>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Paziente</th>
                  <th>Servizio</th>
                  <th>Data</th>
                  <th>Ora</th>
                  <th>Stato</th>
                  <th>Azioni</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={6} className={styles.emptyRow}>
                      <div className={styles.emptyState}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <p>Nessuna prenotazione trovata</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filtered.map((booking) => (
                    <>
                      <tr
                        key={booking.id}
                        className={`${styles.row} ${expandedId === booking.id ? styles.rowExpanded : ''} ${isToday(booking.data) ? styles.rowToday : ''}`}
                        onClick={() =>
                          setExpandedId(expandedId === booking.id ? null : booking.id)
                        }
                      >
                        <td>
                          <div className={styles.paziente}>
                            <div className={styles.pazienteAvatar}>
                              {booking.paziente
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                            </div>
                            <div className={styles.pazienteInfo}>
                              <span className={styles.pazienteNome}>
                                {booking.paziente}
                              </span>
                              {booking.primaVisita && (
                                <span className={styles.newBadge}>Nuovo</span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className={styles.servizio}>{booking.servizio}</span>
                        </td>
                        <td>
                          <span className={`${styles.dataCell} ${isToday(booking.data) ? styles.dataToday : ''}`}>
                            {isToday(booking.data) ? 'Oggi' : formatDate(booking.data)}
                          </span>
                        </td>
                        <td>
                          <span className={styles.oraCell}>{booking.ora}</span>
                        </td>
                        <td>
                          <span
                            className={`${styles.statusBadge} ${styles[`status_${STATUS_META[booking.stato].color}`]}`}
                          >
                            {STATUS_META[booking.stato].label}
                          </span>
                        </td>
                        <td>
                          <div className={styles.actions}>
                            <button
                              className={styles.actionBtn}
                              title="Chiama"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.location.href = `tel:${booking.telefono.replace(/\s/g, '')}`;
                              }}
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                              </svg>
                            </button>
                            <button
                              className={styles.actionBtn}
                              title="Email"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.location.href = `mailto:${booking.email}`;
                              }}
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="M22 7l-10 7L2 7" />
                              </svg>
                            </button>
                            <button
                              className={`${styles.actionBtn} ${styles.actionExpand}`}
                              title="Espandi dettagli"
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedId(expandedId === booking.id ? null : booking.id);
                              }}
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{
                                  transform: expandedId === booking.id ? 'rotate(180deg)' : 'rotate(0)',
                                  transition: 'transform 0.25s ease',
                                }}
                              >
                                <polyline points="6 9 12 15 18 9" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>

                      {/* Expanded details */}
                      {expandedId === booking.id && (
                        <tr key={`${booking.id}-detail`} className={styles.detailRow}>
                          <td colSpan={6}>
                            <div className={styles.detailContent}>
                              <div className={styles.detailGrid}>
                                <div className={styles.detailItem}>
                                  <span className={styles.detailLabel}>ID</span>
                                  <span className={styles.detailValue}>{booking.id}</span>
                                </div>
                                <div className={styles.detailItem}>
                                  <span className={styles.detailLabel}>Telefono</span>
                                  <span className={styles.detailValue}>{booking.telefono}</span>
                                </div>
                                <div className={styles.detailItem}>
                                  <span className={styles.detailLabel}>Email</span>
                                  <span className={styles.detailValue}>{booking.email}</span>
                                </div>
                                <div className={styles.detailItem}>
                                  <span className={styles.detailLabel}>Prima Visita</span>
                                  <span className={styles.detailValue}>
                                    {booking.primaVisita ? 'Sì' : 'No'}
                                  </span>
                                </div>
                              </div>
                              {booking.note && (
                                <div className={styles.detailNote}>
                                  <span className={styles.detailLabel}>Note</span>
                                  <p className={styles.noteText}>{booking.note}</p>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className={styles.tableFooter}>
            <span className={styles.footerCount}>
              {filtered.length} prenotazion{filtered.length === 1 ? 'e' : 'i'}
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
