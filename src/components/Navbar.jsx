import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';
import { useAuth } from '../auth';
const LINKS=[{label:'Home',to:'/'},{label:'Acara',to:'/acara'},{label:'Fitur',to:'/fitur'},{label:'Paket',to:'/paket'},{label:'Template',to:'/katalog'}];
export default function Navbar(){const [open,setOpen]=useState(false);const {pathname}=useLocation();const {session}=useAuth();return <header className="navbar"><div className="container navbar__inner"><Logo/><button type="button" className="navbar__toggle" aria-expanded={open} aria-controls="menu-utama" onClick={()=>setOpen(v=>!v)}><span className="sr-only">Buka menu</span><span aria-hidden="true">{open?'✕':'☰'}</span></button><nav id="menu-utama" className={`navbar__nav${open?' is-open':''}`} aria-label="Menu utama">{LINKS.map(l=><Link key={l.label} to={l.to} className={pathname===l.to?'is-active':undefined} onClick={()=>setOpen(false)}>{l.label}</Link>)}<div className="navbar__actions">{session?<Button to="/dashboard" variant="primary" size="sm">Dashboard</Button>:<><Link to="/masuk" className="navbar__login" onClick={()=>setOpen(false)}>Masuk</Link><Button to="/paket" variant="primary" size="sm" onClick={()=>setOpen(false)}>Buat Undangan</Button></>}</div></nav></div></header>}
