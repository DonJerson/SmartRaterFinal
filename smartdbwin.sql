--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE donjerson;
ALTER ROLE donjerson WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:/01fbqs/EZdCCVpd2bSlXQ==$O9oBShgPLlDAMjX+2Pt1i9uf6UvfNbXbyxKN15/Rrtk=:7uRDMBh33dh4rYm7OKEXkhHcCEJELim9p09GD7AsOeQ=';






--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2 (Debian 14.2-1.pgdg110+1)
-- Dumped by pg_dump version 14.2 (Debian 14.2-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2 (Debian 14.2-1.pgdg110+1)
-- Dumped by pg_dump version 14.2 (Debian 14.2-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- PostgreSQL database dump complete
--

--
-- Database "prietomail" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2 (Debian 14.2-1.pgdg110+1)
-- Dumped by pg_dump version 14.2 (Debian 14.2-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: prietomail; Type: DATABASE; Schema: -; Owner: donjerson
--

CREATE DATABASE prietomail WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE prietomail OWNER TO donjerson;

\connect prietomail

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: enum_protocol; Type: TYPE; Schema: public; Owner: donjerson
--

CREATE TYPE public.enum_protocol AS ENUM (
    'imap',
    'pop3'
);


ALTER TYPE public.enum_protocol OWNER TO donjerson;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: alembic_version; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public.alembic_version (
    version_num character varying(32) NOT NULL
);


ALTER TABLE public.alembic_version OWNER TO donjerson;

--
-- Name: alias; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public.alias (
    created_at date NOT NULL,
    updated_at date,
    comment character varying(255),
    localpart character varying(80) NOT NULL,
    destination character varying(1023) NOT NULL,
    domain_name character varying(80) NOT NULL,
    email character varying(255) NOT NULL,
    wildcard boolean DEFAULT false NOT NULL
);


ALTER TABLE public.alias OWNER TO donjerson;

--
-- Name: alternative; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public.alternative (
    created_at date NOT NULL,
    updated_at date,
    comment character varying(255),
    name character varying(80) NOT NULL,
    domain_name character varying(80)
);


ALTER TABLE public.alternative OWNER TO donjerson;

--
-- Name: config; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public.config (
    name character varying(255) NOT NULL,
    value character varying(255),
    comment character varying(255),
    created_at date DEFAULT '1900-01-01'::date NOT NULL,
    updated_at date
);


ALTER TABLE public.config OWNER TO donjerson;

--
-- Name: domain; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public.domain (
    created_at date NOT NULL,
    updated_at date,
    comment character varying(255),
    name character varying(80) NOT NULL,
    max_users integer DEFAULT '-1'::integer NOT NULL,
    max_aliases integer DEFAULT '-1'::integer NOT NULL,
    max_quota_bytes bigint DEFAULT '0'::bigint NOT NULL,
    signup_enabled boolean DEFAULT false NOT NULL
);


ALTER TABLE public.domain OWNER TO donjerson;

--
-- Name: fetch; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."fetch" (
    created_at date NOT NULL,
    updated_at date,
    comment character varying(255),
    id integer NOT NULL,
    user_email character varying(255) NOT NULL,
    protocol public.enum_protocol NOT NULL,
    host character varying(255) NOT NULL,
    port integer NOT NULL,
    tls boolean NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    error character varying(1023),
    last_check timestamp without time zone,
    keep boolean DEFAULT false NOT NULL
);


ALTER TABLE public."fetch" OWNER TO donjerson;

--
-- Name: fetch_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public.fetch_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.fetch_id_seq OWNER TO donjerson;

--
-- Name: fetch_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public.fetch_id_seq OWNED BY public."fetch".id;


--
-- Name: manager; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public.manager (
    domain_name character varying(80),
    user_email character varying(255)
);


ALTER TABLE public.manager OWNER TO donjerson;

--
-- Name: relay; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public.relay (
    created_at date NOT NULL,
    updated_at date,
    comment character varying(255),
    name character varying(80) NOT NULL,
    smtp character varying(80)
);


ALTER TABLE public.relay OWNER TO donjerson;

--
-- Name: token; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public.token (
    created_at date NOT NULL,
    updated_at date,
    comment character varying(255),
    id integer NOT NULL,
    user_email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    ip character varying(255)
);


ALTER TABLE public.token OWNER TO donjerson;

--
-- Name: token_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public.token_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.token_id_seq OWNER TO donjerson;

--
-- Name: token_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public.token_id_seq OWNED BY public.token.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."user" (
    created_at date NOT NULL,
    updated_at date,
    comment character varying(255),
    localpart character varying(80) NOT NULL,
    password character varying(255) NOT NULL,
    quota_bytes bigint NOT NULL,
    global_admin boolean NOT NULL,
    enable_imap boolean NOT NULL,
    enable_pop boolean NOT NULL,
    forward_enabled boolean NOT NULL,
    forward_destination character varying(255),
    reply_enabled boolean NOT NULL,
    reply_subject character varying(255),
    reply_body text,
    displayed_name character varying(160) NOT NULL,
    spam_enabled boolean NOT NULL,
    domain_name character varying(80) NOT NULL,
    email character varying(255) NOT NULL,
    spam_threshold integer DEFAULT '80'::numeric,
    forward_keep boolean DEFAULT true NOT NULL,
    reply_enddate date DEFAULT '2999-12-31'::date NOT NULL,
    enabled boolean DEFAULT true NOT NULL,
    quota_bytes_used bigint DEFAULT '0'::bigint NOT NULL,
    reply_startdate date DEFAULT '1900-01-01'::date NOT NULL
);


ALTER TABLE public."user" OWNER TO donjerson;

--
-- Name: fetch id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."fetch" ALTER COLUMN id SET DEFAULT nextval('public.fetch_id_seq'::regclass);


--
-- Name: token id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.token ALTER COLUMN id SET DEFAULT nextval('public.token_id_seq'::regclass);


--
-- Data for Name: alembic_version; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public.alembic_version (version_num) FROM stdin;
3b7eee912b41
\.


--
-- Data for Name: alias; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public.alias (created_at, updated_at, comment, localpart, destination, domain_name, email, wildcard) FROM stdin;
\.


--
-- Data for Name: alternative; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public.alternative (created_at, updated_at, comment, name, domain_name) FROM stdin;
\.


--
-- Data for Name: config; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public.config (name, value, comment, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: domain; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public.domain (created_at, updated_at, comment, name, max_users, max_aliases, max_quota_bytes, signup_enabled) FROM stdin;
2022-04-27	\N		jersonmendez.com	-1	-1	0	f
2022-04-27	\N		smartrater.us	10000	10000	0	f
\.


--
-- Data for Name: fetch; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."fetch" (created_at, updated_at, comment, id, user_email, protocol, host, port, tls, username, password, error, last_check, keep) FROM stdin;
\.


--
-- Data for Name: manager; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public.manager (domain_name, user_email) FROM stdin;
\.


--
-- Data for Name: relay; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public.relay (created_at, updated_at, comment, name, smtp) FROM stdin;
\.


--
-- Data for Name: token; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public.token (created_at, updated_at, comment, id, user_email, password, ip) FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."user" (created_at, updated_at, comment, localpart, password, quota_bytes, global_admin, enable_imap, enable_pop, forward_enabled, forward_destination, reply_enabled, reply_subject, reply_body, displayed_name, spam_enabled, domain_name, email, spam_threshold, forward_keep, reply_enddate, enabled, quota_bytes_used, reply_startdate) FROM stdin;
2022-04-27	\N		business	$bcrypt-sha256$v=2,t=2b,r=12$L9d8W.dTJgU3zaqm1TePl.$WlHKiARszwDjFUlFSRoZQ46l0GanR7q	1000000000	t	t	t	f		f	\N	\N		t	jersonmendez.com	business@jersonmendez.com	80	t	2999-12-31	t	0	1900-01-01
2022-04-27	\N		admin	$bcrypt-sha256$v=2,t=2b,r=12$HbY3ADvQVX7jwrqTa3akLO$Mg4rlcz2r1lTEwjUBlSsF6Bfz4TjCcO	1000000000	t	t	t	f		f	\N	\N		t	jersonmendez.com	admin@jersonmendez.com	80	t	2999-12-31	t	0	1900-01-01
2022-04-27	\N		contact	$bcrypt-sha256$v=2,t=2b,r=12$chHiwGoI1F4MoP2tH/AWve$Qldq3LJC0eJYapiys0xLcUeY.Dz5/AS	1000000000	t	t	t	f		f	\N	\N		t	jersonmendez.com	contact@jersonmendez.com	80	t	2999-12-31	t	0	1900-01-01
2022-04-27	\N		contact	$bcrypt-sha256$v=2,t=2b,r=12$wERzjkQ/zrE.O7pZD/UUC.$pR2RVo51r4hxAKlS7RXETt6eWRZoeES	1000000000	t	t	t	f		f	\N	\N		t	smartrater.us	contact@smartrater.us	80	t	2999-12-31	t	0	1900-01-01
2022-04-27	2022-04-27		info	$bcrypt-sha256$v=2,t=2b,r=12$EOUQNhfq01gB3uRr8BsXZ.$9IXEAyeOL6DaFW68tz5h1scIOBVusjW	1000000000	t	t	t	f		f	\N	\N		t	smartrater.us	info@smartrater.us	80	t	2999-12-31	t	4678	1900-01-01
\.


--
-- Name: fetch_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public.fetch_id_seq', 1, false);


--
-- Name: token_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public.token_id_seq', 1, false);


--
-- Name: alembic_version alembic_version_pkc; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.alembic_version
    ADD CONSTRAINT alembic_version_pkc PRIMARY KEY (version_num);


--
-- Name: alias alias_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.alias
    ADD CONSTRAINT alias_pkey PRIMARY KEY (email);


--
-- Name: alternative alternative_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.alternative
    ADD CONSTRAINT alternative_pkey PRIMARY KEY (name);


--
-- Name: config config_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.config
    ADD CONSTRAINT config_pkey PRIMARY KEY (name);


--
-- Name: domain domain_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.domain
    ADD CONSTRAINT domain_pkey PRIMARY KEY (name);


--
-- Name: fetch fetch_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."fetch"
    ADD CONSTRAINT fetch_pkey PRIMARY KEY (id);


--
-- Name: relay relay_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.relay
    ADD CONSTRAINT relay_pkey PRIMARY KEY (name);


--
-- Name: token token_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.token
    ADD CONSTRAINT token_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (email);


--
-- Name: alias alias_domain_name_fkey; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.alias
    ADD CONSTRAINT alias_domain_name_fkey FOREIGN KEY (domain_name) REFERENCES public.domain(name);


--
-- Name: alternative alternative_domain_name_fkey; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.alternative
    ADD CONSTRAINT alternative_domain_name_fkey FOREIGN KEY (domain_name) REFERENCES public.domain(name);


--
-- Name: fetch fetch_user_email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."fetch"
    ADD CONSTRAINT fetch_user_email_fkey FOREIGN KEY (user_email) REFERENCES public."user"(email);


--
-- Name: manager manager_domain_name_fkey; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.manager
    ADD CONSTRAINT manager_domain_name_fkey FOREIGN KEY (domain_name) REFERENCES public.domain(name);


--
-- Name: manager manager_user_email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.manager
    ADD CONSTRAINT manager_user_email_fkey FOREIGN KEY (user_email) REFERENCES public."user"(email);


--
-- Name: token token_user_email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.token
    ADD CONSTRAINT token_user_email_fkey FOREIGN KEY (user_email) REFERENCES public."user"(email);


--
-- Name: user user_domain_name_fkey; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_domain_name_fkey FOREIGN KEY (domain_name) REFERENCES public.domain(name);


--
-- PostgreSQL database dump complete
--

--
-- Database "smartrater" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2 (Debian 14.2-1.pgdg110+1)
-- Dumped by pg_dump version 14.2 (Debian 14.2-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: smartrater; Type: DATABASE; Schema: -; Owner: donjerson
--

CREATE DATABASE smartrater WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE smartrater OWNER TO donjerson;

\connect smartrater

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Insurance_address; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_address" (
    id integer NOT NULL,
    address1 character varying(50),
    address2 character varying(50),
    city character varying(50),
    state character varying(50),
    zipcode character varying(50)
);


ALTER TABLE public."Insurance_address" OWNER TO donjerson;

--
-- Name: Insurance_address_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_address_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_address_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_address_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_address_id_seq" OWNED BY public."Insurance_address".id;


--
-- Name: Insurance_agency; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_agency" (
    id integer NOT NULL,
    "agencyWebsite" character varying(50),
    "agencyLogo" character varying(50),
    "agencyAddress_id" integer,
    "agencyOwner_id" integer
);


ALTER TABLE public."Insurance_agency" OWNER TO donjerson;

--
-- Name: Insurance_agency_agencyDocuments; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_agency_agencyDocuments" (
    id integer NOT NULL,
    agency_id integer NOT NULL,
    uwfile_id integer NOT NULL
);


ALTER TABLE public."Insurance_agency_agencyDocuments" OWNER TO donjerson;

--
-- Name: Insurance_agency_agencyDocuments_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_agency_agencyDocuments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_agency_agencyDocuments_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_agency_agencyDocuments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_agency_agencyDocuments_id_seq" OWNED BY public."Insurance_agency_agencyDocuments".id;


--
-- Name: Insurance_agency_agencyUWFiles; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_agency_agencyUWFiles" (
    id integer NOT NULL,
    agency_id integer NOT NULL,
    uwfile_id integer NOT NULL
);


ALTER TABLE public."Insurance_agency_agencyUWFiles" OWNER TO donjerson;

--
-- Name: Insurance_agency_agencyUWFiles_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_agency_agencyUWFiles_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_agency_agencyUWFiles_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_agency_agencyUWFiles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_agency_agencyUWFiles_id_seq" OWNED BY public."Insurance_agency_agencyUWFiles".id;


--
-- Name: Insurance_agency_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_agency_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_agency_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_agency_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_agency_id_seq" OWNED BY public."Insurance_agency".id;


--
-- Name: Insurance_agencyappointment; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_agencyappointment" (
    id integer NOT NULL,
    "producerCode" character varying(50),
    "webUsername" character varying(50),
    "webPassword" character varying(50),
    "webURL" character varying(50),
    agency_id integer,
    insurer_id integer
);


ALTER TABLE public."Insurance_agencyappointment" OWNER TO donjerson;

--
-- Name: Insurance_agencyappointment_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_agencyappointment_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_agencyappointment_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_agencyappointment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_agencyappointment_id_seq" OWNED BY public."Insurance_agencyappointment".id;


--
-- Name: Insurance_authorizedagent; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_authorizedagent" (
    id integer NOT NULL,
    agent_id integer
);


ALTER TABLE public."Insurance_authorizedagent" OWNER TO donjerson;

--
-- Name: Insurance_authorizedagent_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_authorizedagent_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_authorizedagent_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_authorizedagent_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_authorizedagent_id_seq" OWNED BY public."Insurance_authorizedagent".id;


--
-- Name: Insurance_bankaccount; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_bankaccount" (
    id integer NOT NULL,
    "bankName" character varying(50) NOT NULL,
    "routingNumber" character varying(50) NOT NULL,
    "accountNumber" character varying(50) NOT NULL,
    "accountType" character varying(50) NOT NULL,
    "accountHolderName" character varying(50) NOT NULL,
    owner_id integer
);


ALTER TABLE public."Insurance_bankaccount" OWNER TO donjerson;

--
-- Name: Insurance_bankaccount_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_bankaccount_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_bankaccount_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_bankaccount_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_bankaccount_id_seq" OWNED BY public."Insurance_bankaccount".id;


--
-- Name: Insurance_bodystyleentry; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_bodystyleentry" (
    id integer NOT NULL,
    "bodyStyle" character varying(50) NOT NULL,
    "yearEntry_id" integer
);


ALTER TABLE public."Insurance_bodystyleentry" OWNER TO donjerson;

--
-- Name: Insurance_bodystyleentry_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_bodystyleentry_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_bodystyleentry_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_bodystyleentry_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_bodystyleentry_id_seq" OWNED BY public."Insurance_bodystyleentry".id;


--
-- Name: Insurance_brand; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_brand" (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    short character varying(5)
);


ALTER TABLE public."Insurance_brand" OWNER TO donjerson;

--
-- Name: Insurance_brand_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_brand_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_brand_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_brand_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_brand_id_seq" OWNED BY public."Insurance_brand".id;


--
-- Name: Insurance_businessquoteelements; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_businessquoteelements" (
    id integer NOT NULL,
    "liabiltyLimit" integer,
    "planType" character varying(50),
    "mainInsured_id" integer,
    quote_id integer
);


ALTER TABLE public."Insurance_businessquoteelements" OWNER TO donjerson;

--
-- Name: Insurance_businessquoteelements_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_businessquoteelements_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_businessquoteelements_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_businessquoteelements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_businessquoteelements_id_seq" OWNED BY public."Insurance_businessquoteelements".id;


--
-- Name: Insurance_car; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_car" (
    id integer NOT NULL,
    vin character varying(17),
    mileage character varying(50),
    customer_id integer
);


ALTER TABLE public."Insurance_car" OWNER TO donjerson;

--
-- Name: Insurance_car_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_car_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_car_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_car_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_car_id_seq" OWNED BY public."Insurance_car".id;


--
-- Name: Insurance_card; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_card" (
    id integer NOT NULL,
    "cardNumber" character varying(16) NOT NULL,
    "cardType" character varying(50) NOT NULL,
    "expirationDate" character varying(50) NOT NULL,
    "cardHolderName" character varying(50) NOT NULL,
    "cardSecurityCode" character varying(50) NOT NULL,
    owner_id integer
);


ALTER TABLE public."Insurance_card" OWNER TO donjerson;

--
-- Name: Insurance_card_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_card_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_card_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_card_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_card_id_seq" OWNED BY public."Insurance_card".id;


--
-- Name: Insurance_commercialautoquoteelements; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_commercialautoquoteelements" (
    id integer NOT NULL,
    "biCoverage" integer,
    "homeOwner" boolean,
    "mainInsured_id" integer,
    millitary boolean,
    "ownedBy" character varying(50),
    "pipDeductible" integer NOT NULL,
    "propertyDamageCoverage" integer,
    "rentalDeductible" integer,
    "towingDeductible" integer,
    "uninsuredMotorist" character varying(50),
    quote_id integer
);


ALTER TABLE public."Insurance_commercialautoquoteelements" OWNER TO donjerson;

--
-- Name: Insurance_commercialautoquoteelements_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_commercialautoquoteelements_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_commercialautoquoteelements_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_commercialautoquoteelements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_commercialautoquoteelements_id_seq" OWNED BY public."Insurance_commercialautoquoteelements".id;


--
-- Name: Insurance_company; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_company" (
    id integer NOT NULL,
    "companyName" character varying(50),
    "companyFein" character varying(50),
    "companyType" character varying(50),
    "totalPayroll" integer,
    "numberOfEmployees" integer,
    "companyActivityDescription" character varying(50),
    "companyStartDate" date,
    "yearsOfExperience" integer,
    "companyPhone" character varying(50),
    "companyFax" character varying(50),
    "companyEmail" character varying(50),
    "companyWebsite" character varying(50),
    "companyAddress_id" integer,
    "companyOwner_id" integer NOT NULL
);


ALTER TABLE public."Insurance_company" OWNER TO donjerson;

--
-- Name: Insurance_company_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_company_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_company_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_company_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_company_id_seq" OWNED BY public."Insurance_company".id;


--
-- Name: Insurance_coveredauto; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_coveredauto" (
    id integer NOT NULL,
    "collisionDeductible" integer,
    autoquotelements_id integer,
    car_id integer,
    "rentalDeductible" character varying(50)
);


ALTER TABLE public."Insurance_coveredauto" OWNER TO donjerson;

--
-- Name: Insurance_coveredauto_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_coveredauto_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_coveredauto_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_coveredauto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_coveredauto_id_seq" OWNED BY public."Insurance_coveredauto".id;


--
-- Name: Insurance_crypto; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_crypto" (
    id integer NOT NULL,
    "cryptoAddress" character varying(50) NOT NULL,
    "cryptoType" character varying(50) NOT NULL,
    owner_id integer
);


ALTER TABLE public."Insurance_crypto" OWNER TO donjerson;

--
-- Name: Insurance_crypto_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_crypto_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_crypto_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_crypto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_crypto_id_seq" OWNED BY public."Insurance_crypto".id;


--
-- Name: Insurance_customer; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_customer" (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    username character varying(150) NOT NULL,
    is_staff boolean NOT NULL,
    is_active boolean NOT NULL,
    date_joined timestamp with time zone NOT NULL,
    first_name character varying(50),
    middle_name character varying(50),
    last_name character varying(50),
    email character varying(50),
    phone character varying(50),
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    "profilePicture_id" integer,
    address_id integer
);


ALTER TABLE public."Insurance_customer" OWNER TO donjerson;

--
-- Name: Insurance_customer_groups; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_customer_groups" (
    id integer NOT NULL,
    customer_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public."Insurance_customer_groups" OWNER TO donjerson;

--
-- Name: Insurance_customer_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_customer_groups_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_customer_groups_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_customer_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_customer_groups_id_seq" OWNED BY public."Insurance_customer_groups".id;


--
-- Name: Insurance_customer_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_customer_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_customer_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_customer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_customer_id_seq" OWNED BY public."Insurance_customer".id;


--
-- Name: Insurance_customer_user_permissions; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_customer_user_permissions" (
    id integer NOT NULL,
    customer_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public."Insurance_customer_user_permissions" OWNER TO donjerson;

--
-- Name: Insurance_customer_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_customer_user_permissions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_customer_user_permissions_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_customer_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_customer_user_permissions_id_seq" OWNED BY public."Insurance_customer_user_permissions".id;


--
-- Name: Insurance_endorsement; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_endorsement" (
    id integer NOT NULL,
    "endorsementDate" date NOT NULL,
    "endorsementType" character varying(50) NOT NULL,
    "endorsementStatus" character varying(50) NOT NULL,
    "endorsementPayment_id" integer,
    policy_id integer,
    quote_id integer
);


ALTER TABLE public."Insurance_endorsement" OWNER TO donjerson;

--
-- Name: Insurance_endorsement_endorsementDocuments; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_endorsement_endorsementDocuments" (
    id integer NOT NULL,
    endorsement_id integer NOT NULL,
    uwfile_id integer NOT NULL
);


ALTER TABLE public."Insurance_endorsement_endorsementDocuments" OWNER TO donjerson;

--
-- Name: Insurance_endorsement_endorsementDocuments_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_endorsement_endorsementDocuments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_endorsement_endorsementDocuments_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_endorsement_endorsementDocuments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_endorsement_endorsementDocuments_id_seq" OWNED BY public."Insurance_endorsement_endorsementDocuments".id;


--
-- Name: Insurance_endorsement_endorsementPayments; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_endorsement_endorsementPayments" (
    id integer NOT NULL,
    endorsement_id integer NOT NULL,
    payment_id integer NOT NULL
);


ALTER TABLE public."Insurance_endorsement_endorsementPayments" OWNER TO donjerson;

--
-- Name: Insurance_endorsement_endorsementPayments_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_endorsement_endorsementPayments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_endorsement_endorsementPayments_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_endorsement_endorsementPayments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_endorsement_endorsementPayments_id_seq" OWNED BY public."Insurance_endorsement_endorsementPayments".id;


--
-- Name: Insurance_endorsement_endorsementUWFiles; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_endorsement_endorsementUWFiles" (
    id integer NOT NULL,
    endorsement_id integer NOT NULL,
    uwfile_id integer NOT NULL
);


ALTER TABLE public."Insurance_endorsement_endorsementUWFiles" OWNER TO donjerson;

--
-- Name: Insurance_endorsement_endorsementUWFiles_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_endorsement_endorsementUWFiles_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_endorsement_endorsementUWFiles_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_endorsement_endorsementUWFiles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_endorsement_endorsementUWFiles_id_seq" OWNED BY public."Insurance_endorsement_endorsementUWFiles".id;


--
-- Name: Insurance_endorsement_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_endorsement_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_endorsement_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_endorsement_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_endorsement_id_seq" OWNED BY public."Insurance_endorsement".id;


--
-- Name: Insurance_healthquoteelements; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_healthquoteelements" (
    id integer NOT NULL,
    income integer,
    "mainInsured_id" integer,
    "planType" character varying(50),
    quote_id integer
);


ALTER TABLE public."Insurance_healthquoteelements" OWNER TO donjerson;

--
-- Name: Insurance_healthquoteelements_additionalInsureds; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_healthquoteelements_additionalInsureds" (
    id integer NOT NULL,
    healthquoteelements_id integer NOT NULL,
    namedinsured_id integer NOT NULL
);


ALTER TABLE public."Insurance_healthquoteelements_additionalInsureds" OWNER TO donjerson;

--
-- Name: Insurance_healthquoteelements_additionalInsureds_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_healthquoteelements_additionalInsureds_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_healthquoteelements_additionalInsureds_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_healthquoteelements_additionalInsureds_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_healthquoteelements_additionalInsureds_id_seq" OWNED BY public."Insurance_healthquoteelements_additionalInsureds".id;


--
-- Name: Insurance_healthquoteelements_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_healthquoteelements_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_healthquoteelements_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_healthquoteelements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_healthquoteelements_id_seq" OWNED BY public."Insurance_healthquoteelements".id;


--
-- Name: Insurance_homequoteelements; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_homequoteelements" (
    id integer NOT NULL,
    "propertyValue" numeric(10,2),
    "propertyType" character varying(50),
    "propertyRoof" character varying(50),
    "propertyRoofType" character varying(50),
    "propertyRoofMaterial" character varying(50),
    "propertyRoofColor" character varying(50),
    "dwellingCoverage" numeric(10,2),
    "coverageB" numeric(10,2),
    "liabiltyLimit" numeric(10,2),
    "lossOfUseCoverage" numeric(10,2),
    "personalPropertyCoverage" numeric(10,2),
    "purchasePrice" numeric(10,2),
    "sinkholeCoverage" boolean,
    "hurricaineDeductible" character varying(50),
    "allPerilsDeuctible" integer,
    "numberOfDogs" integer,
    millitary boolean,
    "mainInsured_id" integer,
    "propertyAddress_id" integer,
    "WMInspectionDate" date,
    "buildingCodeGrade" character varying(50),
    "deadboltLock" boolean,
    "electricalWiringUpdateDate" date,
    "electricalWiringUpdated" boolean,
    "fbcWindSpeed" character varying(50),
    "fbcWindSpeedDesign" character varying(50),
    "fireAlarm" boolean,
    "fireAlarmType" character varying(50),
    "fireExtinguisher" boolean,
    "heatingSystemUpdateDate" date,
    "heatingSystemUpdated" boolean,
    "heatingType" character varying(50),
    "medicalPayments" integer,
    "numberOfFamilies" integer,
    "numberOfTenants" integer,
    "openingProtection" character varying(50),
    overhang boolean,
    "plumbingSystemUpdateDate" date,
    "plumbingSystemUpdated" boolean,
    "protectionClass" character varying(50),
    "replacementCost" numeric(10,2),
    "roofCover" character varying(50),
    "roofDeckAttachment" character varying(50),
    "roofShape" character varying(50),
    "roofUpdateDate" date,
    "roofUpdated" boolean,
    "roofWallConnection" character varying(50),
    "secondaryWindResistance" character varying(50),
    "skyLight" boolean,
    "smokeDetector" boolean,
    "sprinklerSystem" boolean,
    "terrainType" character varying(50),
    quote_id integer
);


ALTER TABLE public."Insurance_homequoteelements" OWNER TO donjerson;

--
-- Name: Insurance_homequoteelements_additionalInsureds; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_homequoteelements_additionalInsureds" (
    id integer NOT NULL,
    homequoteelements_id integer NOT NULL,
    namedinsured_id integer NOT NULL
);


ALTER TABLE public."Insurance_homequoteelements_additionalInsureds" OWNER TO donjerson;

--
-- Name: Insurance_homequoteelements_additionalInsureds_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_homequoteelements_additionalInsureds_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_homequoteelements_additionalInsureds_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_homequoteelements_additionalInsureds_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_homequoteelements_additionalInsureds_id_seq" OWNED BY public."Insurance_homequoteelements_additionalInsureds".id;


--
-- Name: Insurance_homequoteelements_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_homequoteelements_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_homequoteelements_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_homequoteelements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_homequoteelements_id_seq" OWNED BY public."Insurance_homequoteelements".id;


--
-- Name: Insurance_insurer; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_insurer" (
    id integer NOT NULL,
    name character varying(50),
    short character varying(15),
    address1 character varying(50),
    address2 character varying(50),
    city character varying(50),
    state character varying(50),
    zipcode character varying(50),
    phone character varying(50),
    fax character varying(50),
    email character varying(50),
    website character varying(50),
    logo character varying(50)
);


ALTER TABLE public."Insurance_insurer" OWNER TO donjerson;

--
-- Name: Insurance_insurer_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_insurer_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_insurer_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_insurer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_insurer_id_seq" OWNED BY public."Insurance_insurer".id;


--
-- Name: Insurance_lifequoteelements; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_lifequoteelements" (
    id integer NOT NULL,
    income integer,
    "mainInsured_id" integer,
    "planType" character varying(50),
    quote_id integer
);


ALTER TABLE public."Insurance_lifequoteelements" OWNER TO donjerson;

--
-- Name: Insurance_lifequoteelements_additionalInsureds; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_lifequoteelements_additionalInsureds" (
    id integer NOT NULL,
    lifequoteelements_id integer NOT NULL,
    namedinsured_id integer NOT NULL
);


ALTER TABLE public."Insurance_lifequoteelements_additionalInsureds" OWNER TO donjerson;

--
-- Name: Insurance_lifequoteelements_additionalInsureds_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_lifequoteelements_additionalInsureds_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_lifequoteelements_additionalInsureds_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_lifequoteelements_additionalInsureds_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_lifequoteelements_additionalInsureds_id_seq" OWNED BY public."Insurance_lifequoteelements_additionalInsureds".id;


--
-- Name: Insurance_lifequoteelements_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_lifequoteelements_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_lifequoteelements_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_lifequoteelements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_lifequoteelements_id_seq" OWNED BY public."Insurance_lifequoteelements".id;


--
-- Name: Insurance_model; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_model" (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    brand_id integer NOT NULL
);


ALTER TABLE public."Insurance_model" OWNER TO donjerson;

--
-- Name: Insurance_model_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_model_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_model_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_model_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_model_id_seq" OWNED BY public."Insurance_model".id;


--
-- Name: Insurance_namedinsured; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_namedinsured" (
    id integer NOT NULL,
    first_name character varying(50),
    middle_name character varying(50),
    last_name character varying(50),
    dob date,
    relationship character varying(50),
    customer_id integer NOT NULL,
    "driversLicense" character varying(50),
    email character varying(50),
    "maritalStatus" character varying(50),
    passport character varying(50),
    phone character varying(50),
    ssn character varying(50),
    occupation character varying(50)
);


ALTER TABLE public."Insurance_namedinsured" OWNER TO donjerson;

--
-- Name: Insurance_namedinsured_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_namedinsured_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_namedinsured_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_namedinsured_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_namedinsured_id_seq" OWNED BY public."Insurance_namedinsured".id;


--
-- Name: Insurance_payment; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_payment" (
    id integer NOT NULL,
    "downPayment" boolean NOT NULL,
    amount numeric(10,2),
    "billDate" date NOT NULL,
    "dueDate" date NOT NULL,
    paid boolean NOT NULL,
    "paymentDate" date,
    "paymentType" character varying(50),
    "paymentStatus" character varying(50),
    "paymentAmount" numeric(10,2),
    "paymentRef" character varying(50),
    "paymentRef2" character varying(50),
    "paymentMethod_id" integer
);


ALTER TABLE public."Insurance_payment" OWNER TO donjerson;

--
-- Name: Insurance_payment_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_payment_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_payment_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_payment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_payment_id_seq" OWNED BY public."Insurance_payment".id;


--
-- Name: Insurance_paymentmethod; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_paymentmethod" (
    id integer NOT NULL,
    "paymentMethod" character varying(50) NOT NULL,
    "bankAccount_id" integer,
    card_id integer,
    crypto_id integer,
    owner_id integer,
    paypal_id integer
);


ALTER TABLE public."Insurance_paymentmethod" OWNER TO donjerson;

--
-- Name: Insurance_paymentmethod_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_paymentmethod_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_paymentmethod_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_paymentmethod_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_paymentmethod_id_seq" OWNED BY public."Insurance_paymentmethod".id;


--
-- Name: Insurance_paypal; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_paypal" (
    id integer NOT NULL,
    email character varying(50) NOT NULL,
    owner_id integer
);


ALTER TABLE public."Insurance_paypal" OWNER TO donjerson;

--
-- Name: Insurance_paypal_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_paypal_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_paypal_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_paypal_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_paypal_id_seq" OWNED BY public."Insurance_paypal".id;


--
-- Name: Insurance_personalautoquoteelements; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_personalautoquoteelements" (
    id integer NOT NULL,
    "propertyDamageCoverage" integer,
    "biCoverage" integer,
    "uninsuredMotorist" character varying(50),
    "pipCoverage" integer NOT NULL,
    "pipDeductible" integer NOT NULL,
    "rentalDeductible" integer,
    "towingDeductible" integer,
    "homeOwner" boolean,
    millitary boolean,
    "mainInsured_id" integer,
    quote_id integer
);


ALTER TABLE public."Insurance_personalautoquoteelements" OWNER TO donjerson;

--
-- Name: Insurance_personalautoquoteelements_additionalInsureds; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_personalautoquoteelements_additionalInsureds" (
    id integer NOT NULL,
    personalautoquoteelements_id integer NOT NULL,
    namedinsured_id integer NOT NULL
);


ALTER TABLE public."Insurance_personalautoquoteelements_additionalInsureds" OWNER TO donjerson;

--
-- Name: Insurance_personalautoquoteelements_additionalInsureds_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_personalautoquoteelements_additionalInsureds_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_personalautoquoteelements_additionalInsureds_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_personalautoquoteelements_additionalInsureds_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_personalautoquoteelements_additionalInsureds_id_seq" OWNED BY public."Insurance_personalautoquoteelements_additionalInsureds".id;


--
-- Name: Insurance_personalautoquoteelements_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_personalautoquoteelements_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_personalautoquoteelements_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_personalautoquoteelements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_personalautoquoteelements_id_seq" OWNED BY public."Insurance_personalautoquoteelements".id;


--
-- Name: Insurance_personalimage; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_personalimage" (
    id integer NOT NULL,
    key character varying(50),
    url character varying(200)
);


ALTER TABLE public."Insurance_personalimage" OWNER TO donjerson;

--
-- Name: Insurance_personalimage_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_personalimage_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_personalimage_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_personalimage_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_personalimage_id_seq" OWNED BY public."Insurance_personalimage".id;


--
-- Name: Insurance_picktrimentry; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_picktrimentry" (
    id integer NOT NULL,
    "pickTrim" character varying(50) NOT NULL,
    "bodyStyle_id" integer
);


ALTER TABLE public."Insurance_picktrimentry" OWNER TO donjerson;

--
-- Name: Insurance_picktrimentry_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_picktrimentry_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_picktrimentry_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_picktrimentry_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_picktrimentry_id_seq" OWNED BY public."Insurance_picktrimentry".id;


--
-- Name: Insurance_policy; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_policy" (
    id integer NOT NULL,
    "commisionAmount" numeric(10,2),
    "commisionPercentage" numeric(10,2),
    "commisionPaid" boolean NOT NULL,
    "bindDate" date NOT NULL,
    "effectiveDate" date NOT NULL,
    "expirationDate" date NOT NULL,
    "policyLength" integer,
    "policyNumber" character varying(50),
    "policyType" character varying(50),
    "policyStatus" character varying(50),
    "policyPremium" numeric(10,2),
    agency_id integer,
    "downPayment_id" integer,
    "policyHolder_id" integer,
    quote_id integer
);


ALTER TABLE public."Insurance_policy" OWNER TO donjerson;

--
-- Name: Insurance_policy_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_policy_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_policy_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_policy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_policy_id_seq" OWNED BY public."Insurance_policy".id;


--
-- Name: Insurance_policy_policyDocuments; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_policy_policyDocuments" (
    id integer NOT NULL,
    policy_id integer NOT NULL,
    uwfile_id integer NOT NULL
);


ALTER TABLE public."Insurance_policy_policyDocuments" OWNER TO donjerson;

--
-- Name: Insurance_policy_policyDocuments_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_policy_policyDocuments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_policy_policyDocuments_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_policy_policyDocuments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_policy_policyDocuments_id_seq" OWNED BY public."Insurance_policy_policyDocuments".id;


--
-- Name: Insurance_policy_policyPayments; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_policy_policyPayments" (
    id integer NOT NULL,
    policy_id integer NOT NULL,
    payment_id integer NOT NULL
);


ALTER TABLE public."Insurance_policy_policyPayments" OWNER TO donjerson;

--
-- Name: Insurance_policy_policyPayments_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_policy_policyPayments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_policy_policyPayments_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_policy_policyPayments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_policy_policyPayments_id_seq" OWNED BY public."Insurance_policy_policyPayments".id;


--
-- Name: Insurance_policy_policyUWFiles; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_policy_policyUWFiles" (
    id integer NOT NULL,
    policy_id integer NOT NULL,
    uwfile_id integer NOT NULL
);


ALTER TABLE public."Insurance_policy_policyUWFiles" OWNER TO donjerson;

--
-- Name: Insurance_policy_policyUWFiles_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_policy_policyUWFiles_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_policy_policyUWFiles_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_policy_policyUWFiles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_policy_policyUWFiles_id_seq" OWNED BY public."Insurance_policy_policyUWFiles".id;


--
-- Name: Insurance_priorinsurance; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_priorinsurance" (
    id integer NOT NULL,
    "policyNumber" character varying(50),
    "effectiveDate" date,
    "expirationDate" date,
    customer_id integer,
    insurer_id integer,
    "priorDocument_id" integer,
    quote_id integer
);


ALTER TABLE public."Insurance_priorinsurance" OWNER TO donjerson;

--
-- Name: Insurance_priorinsurance_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_priorinsurance_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_priorinsurance_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_priorinsurance_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_priorinsurance_id_seq" OWNED BY public."Insurance_priorinsurance".id;


--
-- Name: Insurance_quote; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_quote" (
    id integer NOT NULL,
    status character varying(50) NOT NULL,
    quote_date timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    "quoteId" character varying(50) NOT NULL,
    "pendingReview" boolean NOT NULL,
    customer_id integer,
    "businessType" character varying(50),
    agency_id integer
);


ALTER TABLE public."Insurance_quote" OWNER TO donjerson;

--
-- Name: Insurance_quote_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_quote_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_quote_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_quote_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_quote_id_seq" OWNED BY public."Insurance_quote".id;


--
-- Name: Insurance_quoteline; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_quoteline" (
    id integer NOT NULL,
    "downPayment" numeric(10,2),
    "monthlyPayment" numeric(10,2),
    quote_id integer,
    "totalPremium" numeric(10,2),
    insurer_id integer
);


ALTER TABLE public."Insurance_quoteline" OWNER TO donjerson;

--
-- Name: Insurance_quoteline_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_quoteline_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_quoteline_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_quoteline_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_quoteline_id_seq" OWNED BY public."Insurance_quoteline".id;


--
-- Name: Insurance_supportchat; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_supportchat" (
    id integer NOT NULL,
    closed boolean NOT NULL,
    comment text,
    rating integer,
    customer_id integer
);


ALTER TABLE public."Insurance_supportchat" OWNER TO donjerson;

--
-- Name: Insurance_supportchat_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_supportchat_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_supportchat_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_supportchat_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_supportchat_id_seq" OWNED BY public."Insurance_supportchat".id;


--
-- Name: Insurance_supportmessage; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_supportmessage" (
    id integer NOT NULL,
    date timestamp with time zone NOT NULL,
    text text NOT NULL,
    delivered boolean NOT NULL,
    seen boolean NOT NULL,
    deleted boolean NOT NULL,
    sender_id integer NOT NULL,
    "supportChat_id" integer
);


ALTER TABLE public."Insurance_supportmessage" OWNER TO donjerson;

--
-- Name: Insurance_supportmessage_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_supportmessage_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_supportmessage_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_supportmessage_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_supportmessage_id_seq" OWNED BY public."Insurance_supportmessage".id;


--
-- Name: Insurance_uwfile; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_uwfile" (
    id integer NOT NULL,
    "fileType" character varying(50),
    name character varying(50),
    url character varying(500),
    customer_id integer NOT NULL
);


ALTER TABLE public."Insurance_uwfile" OWNER TO donjerson;

--
-- Name: Insurance_uwfile_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_uwfile_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_uwfile_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_uwfile_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_uwfile_id_seq" OWNED BY public."Insurance_uwfile".id;


--
-- Name: Insurance_yearentry; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public."Insurance_yearentry" (
    id integer NOT NULL,
    year character varying(4) NOT NULL,
    model_id integer NOT NULL
);


ALTER TABLE public."Insurance_yearentry" OWNER TO donjerson;

--
-- Name: Insurance_yearentry_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public."Insurance_yearentry_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Insurance_yearentry_id_seq" OWNER TO donjerson;

--
-- Name: Insurance_yearentry_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public."Insurance_yearentry_id_seq" OWNED BY public."Insurance_yearentry".id;


--
-- Name: auth_group; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO donjerson;

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public.auth_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_id_seq OWNER TO donjerson;

--
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;


--
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public.auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO donjerson;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public.auth_group_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_permissions_id_seq OWNER TO donjerson;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;


--
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO donjerson;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public.auth_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_permission_id_seq OWNER TO donjerson;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;


--
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE public.django_admin_log OWNER TO donjerson;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public.django_admin_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_admin_log_id_seq OWNER TO donjerson;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;


--
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO donjerson;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public.django_content_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_content_type_id_seq OWNER TO donjerson;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;


--
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public.django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO donjerson;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: donjerson
--

CREATE SEQUENCE public.django_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_migrations_id_seq OWNER TO donjerson;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donjerson
--

ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;


--
-- Name: django_session; Type: TABLE; Schema: public; Owner: donjerson
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO donjerson;

--
-- Name: Insurance_address id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_address" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_address_id_seq"'::regclass);


--
-- Name: Insurance_agency id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_agency" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_agency_id_seq"'::regclass);


--
-- Name: Insurance_agency_agencyDocuments id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_agency_agencyDocuments" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_agency_agencyDocuments_id_seq"'::regclass);


--
-- Name: Insurance_agency_agencyUWFiles id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_agency_agencyUWFiles" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_agency_agencyUWFiles_id_seq"'::regclass);


--
-- Name: Insurance_agencyappointment id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_agencyappointment" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_agencyappointment_id_seq"'::regclass);


--
-- Name: Insurance_authorizedagent id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_authorizedagent" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_authorizedagent_id_seq"'::regclass);


--
-- Name: Insurance_bankaccount id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_bankaccount" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_bankaccount_id_seq"'::regclass);


--
-- Name: Insurance_bodystyleentry id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_bodystyleentry" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_bodystyleentry_id_seq"'::regclass);


--
-- Name: Insurance_brand id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_brand" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_brand_id_seq"'::regclass);


--
-- Name: Insurance_businessquoteelements id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_businessquoteelements" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_businessquoteelements_id_seq"'::regclass);


--
-- Name: Insurance_car id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_car" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_car_id_seq"'::regclass);


--
-- Name: Insurance_card id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_card" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_card_id_seq"'::regclass);


--
-- Name: Insurance_commercialautoquoteelements id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_commercialautoquoteelements" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_commercialautoquoteelements_id_seq"'::regclass);


--
-- Name: Insurance_company id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_company" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_company_id_seq"'::regclass);


--
-- Name: Insurance_coveredauto id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_coveredauto" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_coveredauto_id_seq"'::regclass);


--
-- Name: Insurance_crypto id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_crypto" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_crypto_id_seq"'::regclass);


--
-- Name: Insurance_customer id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_customer" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_customer_id_seq"'::regclass);


--
-- Name: Insurance_customer_groups id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_customer_groups" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_customer_groups_id_seq"'::regclass);


--
-- Name: Insurance_customer_user_permissions id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_customer_user_permissions" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_customer_user_permissions_id_seq"'::regclass);


--
-- Name: Insurance_endorsement id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_endorsement" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_endorsement_id_seq"'::regclass);


--
-- Name: Insurance_endorsement_endorsementDocuments id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_endorsement_endorsementDocuments" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_endorsement_endorsementDocuments_id_seq"'::regclass);


--
-- Name: Insurance_endorsement_endorsementPayments id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_endorsement_endorsementPayments" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_endorsement_endorsementPayments_id_seq"'::regclass);


--
-- Name: Insurance_endorsement_endorsementUWFiles id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_endorsement_endorsementUWFiles" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_endorsement_endorsementUWFiles_id_seq"'::regclass);


--
-- Name: Insurance_healthquoteelements id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_healthquoteelements" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_healthquoteelements_id_seq"'::regclass);


--
-- Name: Insurance_healthquoteelements_additionalInsureds id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_healthquoteelements_additionalInsureds" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_healthquoteelements_additionalInsureds_id_seq"'::regclass);


--
-- Name: Insurance_homequoteelements id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_homequoteelements" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_homequoteelements_id_seq"'::regclass);


--
-- Name: Insurance_homequoteelements_additionalInsureds id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_homequoteelements_additionalInsureds" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_homequoteelements_additionalInsureds_id_seq"'::regclass);


--
-- Name: Insurance_insurer id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_insurer" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_insurer_id_seq"'::regclass);


--
-- Name: Insurance_lifequoteelements id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_lifequoteelements" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_lifequoteelements_id_seq"'::regclass);


--
-- Name: Insurance_lifequoteelements_additionalInsureds id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_lifequoteelements_additionalInsureds" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_lifequoteelements_additionalInsureds_id_seq"'::regclass);


--
-- Name: Insurance_model id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_model" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_model_id_seq"'::regclass);


--
-- Name: Insurance_namedinsured id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_namedinsured" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_namedinsured_id_seq"'::regclass);


--
-- Name: Insurance_payment id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_payment" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_payment_id_seq"'::regclass);


--
-- Name: Insurance_paymentmethod id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_paymentmethod" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_paymentmethod_id_seq"'::regclass);


--
-- Name: Insurance_paypal id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_paypal" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_paypal_id_seq"'::regclass);


--
-- Name: Insurance_personalautoquoteelements id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_personalautoquoteelements" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_personalautoquoteelements_id_seq"'::regclass);


--
-- Name: Insurance_personalautoquoteelements_additionalInsureds id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_personalautoquoteelements_additionalInsureds" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_personalautoquoteelements_additionalInsureds_id_seq"'::regclass);


--
-- Name: Insurance_personalimage id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_personalimage" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_personalimage_id_seq"'::regclass);


--
-- Name: Insurance_picktrimentry id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_picktrimentry" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_picktrimentry_id_seq"'::regclass);


--
-- Name: Insurance_policy id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_policy" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_policy_id_seq"'::regclass);


--
-- Name: Insurance_policy_policyDocuments id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_policy_policyDocuments" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_policy_policyDocuments_id_seq"'::regclass);


--
-- Name: Insurance_policy_policyPayments id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_policy_policyPayments" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_policy_policyPayments_id_seq"'::regclass);


--
-- Name: Insurance_policy_policyUWFiles id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_policy_policyUWFiles" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_policy_policyUWFiles_id_seq"'::regclass);


--
-- Name: Insurance_priorinsurance id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_priorinsurance" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_priorinsurance_id_seq"'::regclass);


--
-- Name: Insurance_quote id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_quote" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_quote_id_seq"'::regclass);


--
-- Name: Insurance_quoteline id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_quoteline" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_quoteline_id_seq"'::regclass);


--
-- Name: Insurance_supportchat id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_supportchat" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_supportchat_id_seq"'::regclass);


--
-- Name: Insurance_supportmessage id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_supportmessage" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_supportmessage_id_seq"'::regclass);


--
-- Name: Insurance_uwfile id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_uwfile" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_uwfile_id_seq"'::regclass);


--
-- Name: Insurance_yearentry id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_yearentry" ALTER COLUMN id SET DEFAULT nextval('public."Insurance_yearentry_id_seq"'::regclass);


--
-- Name: auth_group id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);


--
-- Name: auth_group_permissions id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);


--
-- Name: auth_permission id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);


--
-- Name: django_admin_log id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);


--
-- Name: django_content_type id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);


--
-- Name: django_migrations id; Type: DEFAULT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);


--
-- Data for Name: Insurance_address; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_address" (id, address1, address2, city, state, zipcode) FROM stdin;
\.


--
-- Data for Name: Insurance_agency; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_agency" (id, "agencyWebsite", "agencyLogo", "agencyAddress_id", "agencyOwner_id") FROM stdin;
\.


--
-- Data for Name: Insurance_agency_agencyDocuments; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_agency_agencyDocuments" (id, agency_id, uwfile_id) FROM stdin;
\.


--
-- Data for Name: Insurance_agency_agencyUWFiles; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_agency_agencyUWFiles" (id, agency_id, uwfile_id) FROM stdin;
\.


--
-- Data for Name: Insurance_agencyappointment; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_agencyappointment" (id, "producerCode", "webUsername", "webPassword", "webURL", agency_id, insurer_id) FROM stdin;
\.


--
-- Data for Name: Insurance_authorizedagent; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_authorizedagent" (id, agent_id) FROM stdin;
\.


--
-- Data for Name: Insurance_bankaccount; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_bankaccount" (id, "bankName", "routingNumber", "accountNumber", "accountType", "accountHolderName", owner_id) FROM stdin;
\.


--
-- Data for Name: Insurance_bodystyleentry; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_bodystyleentry" (id, "bodyStyle", "yearEntry_id") FROM stdin;
\.


--
-- Data for Name: Insurance_brand; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_brand" (id, name, short) FROM stdin;
\.


--
-- Data for Name: Insurance_businessquoteelements; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_businessquoteelements" (id, "liabiltyLimit", "planType", "mainInsured_id", quote_id) FROM stdin;
\.


--
-- Data for Name: Insurance_car; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_car" (id, vin, mileage, customer_id) FROM stdin;
\.


--
-- Data for Name: Insurance_card; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_card" (id, "cardNumber", "cardType", "expirationDate", "cardHolderName", "cardSecurityCode", owner_id) FROM stdin;
\.


--
-- Data for Name: Insurance_commercialautoquoteelements; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_commercialautoquoteelements" (id, "biCoverage", "homeOwner", "mainInsured_id", millitary, "ownedBy", "pipDeductible", "propertyDamageCoverage", "rentalDeductible", "towingDeductible", "uninsuredMotorist", quote_id) FROM stdin;
\.


--
-- Data for Name: Insurance_company; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_company" (id, "companyName", "companyFein", "companyType", "totalPayroll", "numberOfEmployees", "companyActivityDescription", "companyStartDate", "yearsOfExperience", "companyPhone", "companyFax", "companyEmail", "companyWebsite", "companyAddress_id", "companyOwner_id") FROM stdin;
\.


--
-- Data for Name: Insurance_coveredauto; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_coveredauto" (id, "collisionDeductible", autoquotelements_id, car_id, "rentalDeductible") FROM stdin;
\.


--
-- Data for Name: Insurance_crypto; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_crypto" (id, "cryptoAddress", "cryptoType", owner_id) FROM stdin;
\.


--
-- Data for Name: Insurance_customer; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_customer" (id, password, last_login, is_superuser, username, is_staff, is_active, date_joined, first_name, middle_name, last_name, email, phone, created_at, updated_at, "profilePicture_id", address_id) FROM stdin;
1	pbkdf2_sha256$260000$Ci1kbUF9H2vIqMzDW8XK9C$jqA1WJan44UGPELJAVC8TLoPB8U+Ek+Q8fAeKEjCh20=	\N	t	donjerson	t	t	2022-04-20 19:54:40.830224+00	\N	\N	\N	jersonamendez@gmail.com	\N	2022-04-20 19:54:40.913488+00	2022-04-20 19:54:40.913501+00	\N	\N
\.


--
-- Data for Name: Insurance_customer_groups; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_customer_groups" (id, customer_id, group_id) FROM stdin;
\.


--
-- Data for Name: Insurance_customer_user_permissions; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_customer_user_permissions" (id, customer_id, permission_id) FROM stdin;
\.


--
-- Data for Name: Insurance_endorsement; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_endorsement" (id, "endorsementDate", "endorsementType", "endorsementStatus", "endorsementPayment_id", policy_id, quote_id) FROM stdin;
\.


--
-- Data for Name: Insurance_endorsement_endorsementDocuments; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_endorsement_endorsementDocuments" (id, endorsement_id, uwfile_id) FROM stdin;
\.


--
-- Data for Name: Insurance_endorsement_endorsementPayments; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_endorsement_endorsementPayments" (id, endorsement_id, payment_id) FROM stdin;
\.


--
-- Data for Name: Insurance_endorsement_endorsementUWFiles; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_endorsement_endorsementUWFiles" (id, endorsement_id, uwfile_id) FROM stdin;
\.


--
-- Data for Name: Insurance_healthquoteelements; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_healthquoteelements" (id, income, "mainInsured_id", "planType", quote_id) FROM stdin;
\.


--
-- Data for Name: Insurance_healthquoteelements_additionalInsureds; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_healthquoteelements_additionalInsureds" (id, healthquoteelements_id, namedinsured_id) FROM stdin;
\.


--
-- Data for Name: Insurance_homequoteelements; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_homequoteelements" (id, "propertyValue", "propertyType", "propertyRoof", "propertyRoofType", "propertyRoofMaterial", "propertyRoofColor", "dwellingCoverage", "coverageB", "liabiltyLimit", "lossOfUseCoverage", "personalPropertyCoverage", "purchasePrice", "sinkholeCoverage", "hurricaineDeductible", "allPerilsDeuctible", "numberOfDogs", millitary, "mainInsured_id", "propertyAddress_id", "WMInspectionDate", "buildingCodeGrade", "deadboltLock", "electricalWiringUpdateDate", "electricalWiringUpdated", "fbcWindSpeed", "fbcWindSpeedDesign", "fireAlarm", "fireAlarmType", "fireExtinguisher", "heatingSystemUpdateDate", "heatingSystemUpdated", "heatingType", "medicalPayments", "numberOfFamilies", "numberOfTenants", "openingProtection", overhang, "plumbingSystemUpdateDate", "plumbingSystemUpdated", "protectionClass", "replacementCost", "roofCover", "roofDeckAttachment", "roofShape", "roofUpdateDate", "roofUpdated", "roofWallConnection", "secondaryWindResistance", "skyLight", "smokeDetector", "sprinklerSystem", "terrainType", quote_id) FROM stdin;
\.


--
-- Data for Name: Insurance_homequoteelements_additionalInsureds; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_homequoteelements_additionalInsureds" (id, homequoteelements_id, namedinsured_id) FROM stdin;
\.


--
-- Data for Name: Insurance_insurer; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_insurer" (id, name, short, address1, address2, city, state, zipcode, phone, fax, email, website, logo) FROM stdin;
\.


--
-- Data for Name: Insurance_lifequoteelements; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_lifequoteelements" (id, income, "mainInsured_id", "planType", quote_id) FROM stdin;
\.


--
-- Data for Name: Insurance_lifequoteelements_additionalInsureds; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_lifequoteelements_additionalInsureds" (id, lifequoteelements_id, namedinsured_id) FROM stdin;
\.


--
-- Data for Name: Insurance_model; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_model" (id, name, brand_id) FROM stdin;
\.


--
-- Data for Name: Insurance_namedinsured; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_namedinsured" (id, first_name, middle_name, last_name, dob, relationship, customer_id, "driversLicense", email, "maritalStatus", passport, phone, ssn, occupation) FROM stdin;
\.


--
-- Data for Name: Insurance_payment; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_payment" (id, "downPayment", amount, "billDate", "dueDate", paid, "paymentDate", "paymentType", "paymentStatus", "paymentAmount", "paymentRef", "paymentRef2", "paymentMethod_id") FROM stdin;
\.


--
-- Data for Name: Insurance_paymentmethod; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_paymentmethod" (id, "paymentMethod", "bankAccount_id", card_id, crypto_id, owner_id, paypal_id) FROM stdin;
\.


--
-- Data for Name: Insurance_paypal; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_paypal" (id, email, owner_id) FROM stdin;
\.


--
-- Data for Name: Insurance_personalautoquoteelements; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_personalautoquoteelements" (id, "propertyDamageCoverage", "biCoverage", "uninsuredMotorist", "pipCoverage", "pipDeductible", "rentalDeductible", "towingDeductible", "homeOwner", millitary, "mainInsured_id", quote_id) FROM stdin;
\.


--
-- Data for Name: Insurance_personalautoquoteelements_additionalInsureds; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_personalautoquoteelements_additionalInsureds" (id, personalautoquoteelements_id, namedinsured_id) FROM stdin;
\.


--
-- Data for Name: Insurance_personalimage; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_personalimage" (id, key, url) FROM stdin;
\.


--
-- Data for Name: Insurance_picktrimentry; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_picktrimentry" (id, "pickTrim", "bodyStyle_id") FROM stdin;
\.


--
-- Data for Name: Insurance_policy; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_policy" (id, "commisionAmount", "commisionPercentage", "commisionPaid", "bindDate", "effectiveDate", "expirationDate", "policyLength", "policyNumber", "policyType", "policyStatus", "policyPremium", agency_id, "downPayment_id", "policyHolder_id", quote_id) FROM stdin;
\.


--
-- Data for Name: Insurance_policy_policyDocuments; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_policy_policyDocuments" (id, policy_id, uwfile_id) FROM stdin;
\.


--
-- Data for Name: Insurance_policy_policyPayments; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_policy_policyPayments" (id, policy_id, payment_id) FROM stdin;
\.


--
-- Data for Name: Insurance_policy_policyUWFiles; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_policy_policyUWFiles" (id, policy_id, uwfile_id) FROM stdin;
\.


--
-- Data for Name: Insurance_priorinsurance; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_priorinsurance" (id, "policyNumber", "effectiveDate", "expirationDate", customer_id, insurer_id, "priorDocument_id", quote_id) FROM stdin;
\.


--
-- Data for Name: Insurance_quote; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_quote" (id, status, quote_date, updated_at, "quoteId", "pendingReview", customer_id, "businessType", agency_id) FROM stdin;
\.


--
-- Data for Name: Insurance_quoteline; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_quoteline" (id, "downPayment", "monthlyPayment", quote_id, "totalPremium", insurer_id) FROM stdin;
\.


--
-- Data for Name: Insurance_supportchat; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_supportchat" (id, closed, comment, rating, customer_id) FROM stdin;
\.


--
-- Data for Name: Insurance_supportmessage; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_supportmessage" (id, date, text, delivered, seen, deleted, sender_id, "supportChat_id") FROM stdin;
\.


--
-- Data for Name: Insurance_uwfile; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_uwfile" (id, "fileType", name, url, customer_id) FROM stdin;
\.


--
-- Data for Name: Insurance_yearentry; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public."Insurance_yearentry" (id, year, model_id) FROM stdin;
\.


--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add content type	1	add_contenttype
2	Can change content type	1	change_contenttype
3	Can delete content type	1	delete_contenttype
4	Can view content type	1	view_contenttype
5	Can add log entry	2	add_logentry
6	Can change log entry	2	change_logentry
7	Can delete log entry	2	delete_logentry
8	Can view log entry	2	view_logentry
9	Can add permission	3	add_permission
10	Can change permission	3	change_permission
11	Can delete permission	3	delete_permission
12	Can view permission	3	view_permission
13	Can add group	4	add_group
14	Can change group	4	change_group
15	Can delete group	4	delete_group
16	Can view group	4	view_group
17	Can add session	5	add_session
18	Can change session	5	change_session
19	Can delete session	5	delete_session
20	Can view session	5	view_session
21	Can add personal image	6	add_personalimage
22	Can change personal image	6	change_personalimage
23	Can delete personal image	6	delete_personalimage
24	Can view personal image	6	view_personalimage
25	Can add support chat	7	add_supportchat
26	Can change support chat	7	change_supportchat
27	Can delete support chat	7	delete_supportchat
28	Can view support chat	7	view_supportchat
29	Can add user	8	add_customer
30	Can change user	8	change_customer
31	Can delete user	8	delete_customer
32	Can view user	8	view_customer
33	Can add support message	9	add_supportmessage
34	Can change support message	9	change_supportmessage
35	Can delete support message	9	delete_supportmessage
36	Can view support message	9	view_supportmessage
37	Can add quote line	10	add_quoteline
38	Can change quote line	10	change_quoteline
39	Can delete quote line	10	delete_quoteline
40	Can view quote line	10	view_quoteline
41	Can add quote	11	add_quote
42	Can change quote	11	change_quote
43	Can delete quote	11	delete_quote
44	Can view quote	11	view_quote
45	Can add car	12	add_car
46	Can change car	12	change_car
47	Can delete car	12	delete_car
48	Can view car	12	view_car
49	Can add named insured	13	add_namedinsured
50	Can change named insured	13	change_namedinsured
51	Can delete named insured	13	delete_namedinsured
52	Can view named insured	13	view_namedinsured
53	Can add body style entry	14	add_bodystyleentry
54	Can change body style entry	14	change_bodystyleentry
55	Can delete body style entry	14	delete_bodystyleentry
56	Can view body style entry	14	view_bodystyleentry
57	Can add brand	15	add_brand
58	Can change brand	15	change_brand
59	Can delete brand	15	delete_brand
60	Can view brand	15	view_brand
61	Can add model	16	add_model
62	Can change model	16	change_model
63	Can delete model	16	delete_model
64	Can view model	16	view_model
65	Can add pick trim entry	17	add_picktrimentry
66	Can change pick trim entry	17	change_picktrimentry
67	Can delete pick trim entry	17	delete_picktrimentry
68	Can view pick trim entry	17	view_picktrimentry
69	Can add year entry	18	add_yearentry
70	Can change year entry	18	change_yearentry
71	Can delete year entry	18	delete_yearentry
72	Can view year entry	18	view_yearentry
73	Can add address	19	add_address
74	Can change address	19	change_address
75	Can delete address	19	delete_address
76	Can view address	19	view_address
77	Can add business quote elements	20	add_businessquoteelements
78	Can change business quote elements	20	change_businessquoteelements
79	Can delete business quote elements	20	delete_businessquoteelements
80	Can view business quote elements	20	view_businessquoteelements
81	Can add commercial auto quote elements	21	add_commercialautoquoteelements
82	Can change commercial auto quote elements	21	change_commercialautoquoteelements
83	Can delete commercial auto quote elements	21	delete_commercialautoquoteelements
84	Can view commercial auto quote elements	21	view_commercialautoquoteelements
85	Can add covered auto	22	add_coveredauto
86	Can change covered auto	22	change_coveredauto
87	Can delete covered auto	22	delete_coveredauto
88	Can view covered auto	22	view_coveredauto
89	Can add health quote elements	23	add_healthquoteelements
90	Can change health quote elements	23	change_healthquoteelements
91	Can delete health quote elements	23	delete_healthquoteelements
92	Can view health quote elements	23	view_healthquoteelements
93	Can add home quote elements	24	add_homequoteelements
94	Can change home quote elements	24	change_homequoteelements
95	Can delete home quote elements	24	delete_homequoteelements
96	Can view home quote elements	24	view_homequoteelements
97	Can add insurer	25	add_insurer
98	Can change insurer	25	change_insurer
99	Can delete insurer	25	delete_insurer
100	Can view insurer	25	view_insurer
101	Can add life quote elements	26	add_lifequoteelements
102	Can change life quote elements	26	change_lifequoteelements
103	Can delete life quote elements	26	delete_lifequoteelements
104	Can view life quote elements	26	view_lifequoteelements
105	Can add uw file	27	add_uwfile
106	Can change uw file	27	change_uwfile
107	Can delete uw file	27	delete_uwfile
108	Can view uw file	27	view_uwfile
109	Can add agency	28	add_agency
110	Can change agency	28	change_agency
111	Can delete agency	28	delete_agency
112	Can view agency	28	view_agency
113	Can add agency appointment	29	add_agencyappointment
114	Can change agency appointment	29	change_agencyappointment
115	Can delete agency appointment	29	delete_agencyappointment
116	Can view agency appointment	29	view_agencyappointment
117	Can add authorized agent	30	add_authorizedagent
118	Can change authorized agent	30	change_authorizedagent
119	Can delete authorized agent	30	delete_authorizedagent
120	Can view authorized agent	30	view_authorizedagent
121	Can add bank account	31	add_bankaccount
122	Can change bank account	31	change_bankaccount
123	Can delete bank account	31	delete_bankaccount
124	Can view bank account	31	view_bankaccount
125	Can add card	32	add_card
126	Can change card	32	change_card
127	Can delete card	32	delete_card
128	Can view card	32	view_card
129	Can add company	33	add_company
130	Can change company	33	change_company
131	Can delete company	33	delete_company
132	Can view company	33	view_company
133	Can add crypto	34	add_crypto
134	Can change crypto	34	change_crypto
135	Can delete crypto	34	delete_crypto
136	Can view crypto	34	view_crypto
137	Can add endorsement	35	add_endorsement
138	Can change endorsement	35	change_endorsement
139	Can delete endorsement	35	delete_endorsement
140	Can view endorsement	35	view_endorsement
141	Can add payment	36	add_payment
142	Can change payment	36	change_payment
143	Can delete payment	36	delete_payment
144	Can view payment	36	view_payment
145	Can add payment method	37	add_paymentmethod
146	Can change payment method	37	change_paymentmethod
147	Can delete payment method	37	delete_paymentmethod
148	Can view payment method	37	view_paymentmethod
149	Can add pay pal	38	add_paypal
150	Can change pay pal	38	change_paypal
151	Can delete pay pal	38	delete_paypal
152	Can view pay pal	38	view_paypal
153	Can add personal auto quote elements	39	add_personalautoquoteelements
154	Can change personal auto quote elements	39	change_personalautoquoteelements
155	Can delete personal auto quote elements	39	delete_personalautoquoteelements
156	Can view personal auto quote elements	39	view_personalautoquoteelements
157	Can add policy	40	add_policy
158	Can change policy	40	change_policy
159	Can delete policy	40	delete_policy
160	Can view policy	40	view_policy
161	Can add prior insurance	41	add_priorinsurance
162	Can change prior insurance	41	change_priorinsurance
163	Can delete prior insurance	41	delete_priorinsurance
164	Can view prior insurance	41	view_priorinsurance
\.


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
\.


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	contenttypes	contenttype
2	admin	logentry
3	auth	permission
4	auth	group
5	sessions	session
6	Insurance	personalimage
7	Insurance	supportchat
8	Insurance	customer
9	Insurance	supportmessage
10	Insurance	quoteline
11	Insurance	quote
12	Insurance	car
13	Insurance	namedinsured
14	Insurance	bodystyleentry
15	Insurance	brand
16	Insurance	model
17	Insurance	picktrimentry
18	Insurance	yearentry
19	Insurance	address
20	Insurance	businessquoteelements
21	Insurance	commercialautoquoteelements
22	Insurance	coveredauto
23	Insurance	healthquoteelements
24	Insurance	homequoteelements
25	Insurance	insurer
26	Insurance	lifequoteelements
27	Insurance	uwfile
28	Insurance	agency
29	Insurance	agencyappointment
30	Insurance	authorizedagent
31	Insurance	bankaccount
32	Insurance	card
33	Insurance	company
34	Insurance	crypto
35	Insurance	endorsement
36	Insurance	payment
37	Insurance	paymentmethod
38	Insurance	paypal
39	Insurance	personalautoquoteelements
40	Insurance	policy
41	Insurance	priorinsurance
\.


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2022-04-20 19:53:26.962364+00
2	contenttypes	0002_remove_content_type_name	2022-04-20 19:53:26.978861+00
3	auth	0001_initial	2022-04-20 19:53:27.076995+00
4	auth	0002_alter_permission_name_max_length	2022-04-20 19:53:27.08597+00
5	auth	0003_alter_user_email_max_length	2022-04-20 19:53:27.096853+00
6	auth	0004_alter_user_username_opts	2022-04-20 19:53:27.1109+00
7	auth	0005_alter_user_last_login_null	2022-04-20 19:53:27.123823+00
8	auth	0006_require_contenttypes_0002	2022-04-20 19:53:27.129836+00
9	auth	0007_alter_validators_add_error_messages	2022-04-20 19:53:27.140708+00
10	auth	0008_alter_user_username_max_length	2022-04-20 19:53:27.154547+00
11	auth	0009_alter_user_last_name_max_length	2022-04-20 19:53:27.165267+00
12	auth	0010_alter_group_name_max_length	2022-04-20 19:53:27.177569+00
13	auth	0011_update_proxy_permissions	2022-04-20 19:53:27.187022+00
14	Insurance	0001_initial	2022-04-20 19:53:27.533467+00
15	Insurance	0002_carsdb_namedinsured	2022-04-20 19:53:27.578587+00
16	Insurance	0003_auto_20220111_0143	2022-04-20 19:53:27.588724+00
17	Insurance	0004_auto_20220113_0105	2022-04-20 19:53:27.681961+00
18	Insurance	0005_brand_abvr	2022-04-20 19:53:27.68838+00
19	Insurance	0006_auto_20220113_0251	2022-04-20 19:53:27.697799+00
20	Insurance	0007_auto_20220115_0139	2022-04-20 19:53:28.745489+00
21	Insurance	0008_auto_20220115_0143	2022-04-20 19:53:28.838319+00
22	Insurance	0009_auto_20220116_0217	2022-04-20 19:53:31.24251+00
23	Insurance	0010_auto_20220116_1432	2022-04-20 19:53:32.069513+00
24	Insurance	0011_auto_20220116_1652	2022-04-20 19:53:32.252191+00
25	Insurance	0012_auto_20220118_0250	2022-04-20 19:53:32.32445+00
26	Insurance	0013_auto_20220118_1541	2022-04-20 19:53:32.592048+00
27	Insurance	0014_auto_20220118_1608	2022-04-20 19:53:32.635293+00
28	Insurance	0015_agency_agencyname	2022-04-20 19:53:32.666367+00
29	Insurance	0016_auto_20220118_2304	2022-04-20 19:53:33.190854+00
30	Insurance	0017_auto_20220128_1639	2022-04-20 19:53:33.871896+00
31	admin	0001_initial	2022-04-20 19:53:33.94018+00
32	admin	0002_logentry_remove_auto_add	2022-04-20 19:53:33.967002+00
33	admin	0003_logentry_add_action_flag_choices	2022-04-20 19:53:33.994287+00
34	auth	0012_alter_user_first_name_max_length	2022-04-20 19:53:34.009477+00
35	sessions	0001_initial	2022-04-20 19:53:34.06141+00
\.


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: donjerson
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
\.


--
-- Name: Insurance_address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_address_id_seq"', 1, false);


--
-- Name: Insurance_agency_agencyDocuments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_agency_agencyDocuments_id_seq"', 1, false);


--
-- Name: Insurance_agency_agencyUWFiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_agency_agencyUWFiles_id_seq"', 1, false);


--
-- Name: Insurance_agency_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_agency_id_seq"', 1, false);


--
-- Name: Insurance_agencyappointment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_agencyappointment_id_seq"', 1, false);


--
-- Name: Insurance_authorizedagent_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_authorizedagent_id_seq"', 1, false);


--
-- Name: Insurance_bankaccount_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_bankaccount_id_seq"', 1, false);


--
-- Name: Insurance_bodystyleentry_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_bodystyleentry_id_seq"', 1, false);


--
-- Name: Insurance_brand_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_brand_id_seq"', 1, false);


--
-- Name: Insurance_businessquoteelements_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_businessquoteelements_id_seq"', 1, false);


--
-- Name: Insurance_car_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_car_id_seq"', 1, false);


--
-- Name: Insurance_card_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_card_id_seq"', 1, false);


--
-- Name: Insurance_commercialautoquoteelements_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_commercialautoquoteelements_id_seq"', 1, false);


--
-- Name: Insurance_company_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_company_id_seq"', 1, false);


--
-- Name: Insurance_coveredauto_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_coveredauto_id_seq"', 1, false);


--
-- Name: Insurance_crypto_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_crypto_id_seq"', 1, false);


--
-- Name: Insurance_customer_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_customer_groups_id_seq"', 1, false);


--
-- Name: Insurance_customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_customer_id_seq"', 1, true);


--
-- Name: Insurance_customer_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_customer_user_permissions_id_seq"', 1, false);


--
-- Name: Insurance_endorsement_endorsementDocuments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_endorsement_endorsementDocuments_id_seq"', 1, false);


--
-- Name: Insurance_endorsement_endorsementPayments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_endorsement_endorsementPayments_id_seq"', 1, false);


--
-- Name: Insurance_endorsement_endorsementUWFiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_endorsement_endorsementUWFiles_id_seq"', 1, false);


--
-- Name: Insurance_endorsement_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_endorsement_id_seq"', 1, false);


--
-- Name: Insurance_healthquoteelements_additionalInsureds_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_healthquoteelements_additionalInsureds_id_seq"', 1, false);


--
-- Name: Insurance_healthquoteelements_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_healthquoteelements_id_seq"', 1, false);


--
-- Name: Insurance_homequoteelements_additionalInsureds_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_homequoteelements_additionalInsureds_id_seq"', 1, false);


--
-- Name: Insurance_homequoteelements_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_homequoteelements_id_seq"', 1, false);


--
-- Name: Insurance_insurer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_insurer_id_seq"', 1, false);


--
-- Name: Insurance_lifequoteelements_additionalInsureds_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_lifequoteelements_additionalInsureds_id_seq"', 1, false);


--
-- Name: Insurance_lifequoteelements_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_lifequoteelements_id_seq"', 1, false);


--
-- Name: Insurance_model_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_model_id_seq"', 1, false);


--
-- Name: Insurance_namedinsured_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_namedinsured_id_seq"', 1, false);


--
-- Name: Insurance_payment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_payment_id_seq"', 1, false);


--
-- Name: Insurance_paymentmethod_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_paymentmethod_id_seq"', 1, false);


--
-- Name: Insurance_paypal_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_paypal_id_seq"', 1, false);


--
-- Name: Insurance_personalautoquoteelements_additionalInsureds_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_personalautoquoteelements_additionalInsureds_id_seq"', 1, false);


--
-- Name: Insurance_personalautoquoteelements_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_personalautoquoteelements_id_seq"', 1, false);


--
-- Name: Insurance_personalimage_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_personalimage_id_seq"', 1, false);


--
-- Name: Insurance_picktrimentry_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_picktrimentry_id_seq"', 1, false);


--
-- Name: Insurance_policy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_policy_id_seq"', 1, false);


--
-- Name: Insurance_policy_policyDocuments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_policy_policyDocuments_id_seq"', 1, false);


--
-- Name: Insurance_policy_policyPayments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_policy_policyPayments_id_seq"', 1, false);


--
-- Name: Insurance_policy_policyUWFiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_policy_policyUWFiles_id_seq"', 1, false);


--
-- Name: Insurance_priorinsurance_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_priorinsurance_id_seq"', 1, false);


--
-- Name: Insurance_quote_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_quote_id_seq"', 1, false);


--
-- Name: Insurance_quoteline_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_quoteline_id_seq"', 1, false);


--
-- Name: Insurance_supportchat_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_supportchat_id_seq"', 1, false);


--
-- Name: Insurance_supportmessage_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_supportmessage_id_seq"', 1, false);


--
-- Name: Insurance_uwfile_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_uwfile_id_seq"', 1, false);


--
-- Name: Insurance_yearentry_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public."Insurance_yearentry_id_seq"', 1, false);


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 164, true);


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 1, false);


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 41, true);


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donjerson
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 35, true);


--
-- Name: Insurance_address Insurance_address_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_address"
    ADD CONSTRAINT "Insurance_address_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_agency_agencyDocuments Insurance_agency_agencyD_agency_id_uwfile_id_7ecd0269_uniq; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_agency_agencyDocuments"
    ADD CONSTRAINT "Insurance_agency_agencyD_agency_id_uwfile_id_7ecd0269_uniq" UNIQUE (agency_id, uwfile_id);


--
-- Name: Insurance_agency_agencyDocuments Insurance_agency_agencyDocuments_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_agency_agencyDocuments"
    ADD CONSTRAINT "Insurance_agency_agencyDocuments_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_agency_agencyUWFiles Insurance_agency_agencyUWFiles_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_agency_agencyUWFiles"
    ADD CONSTRAINT "Insurance_agency_agencyUWFiles_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_agency_agencyUWFiles Insurance_agency_agencyU_agency_id_uwfile_id_2efe9b43_uniq; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_agency_agencyUWFiles"
    ADD CONSTRAINT "Insurance_agency_agencyU_agency_id_uwfile_id_2efe9b43_uniq" UNIQUE (agency_id, uwfile_id);


--
-- Name: Insurance_agency Insurance_agency_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_agency"
    ADD CONSTRAINT "Insurance_agency_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_agencyappointment Insurance_agencyappointment_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_agencyappointment"
    ADD CONSTRAINT "Insurance_agencyappointment_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_authorizedagent Insurance_authorizedagent_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_authorizedagent"
    ADD CONSTRAINT "Insurance_authorizedagent_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_bankaccount Insurance_bankaccount_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_bankaccount"
    ADD CONSTRAINT "Insurance_bankaccount_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_bodystyleentry Insurance_bodystyleentry_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_bodystyleentry"
    ADD CONSTRAINT "Insurance_bodystyleentry_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_brand Insurance_brand_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_brand"
    ADD CONSTRAINT "Insurance_brand_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_businessquoteelements Insurance_businessquoteelements_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_businessquoteelements"
    ADD CONSTRAINT "Insurance_businessquoteelements_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_car Insurance_car_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_car"
    ADD CONSTRAINT "Insurance_car_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_card Insurance_card_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_card"
    ADD CONSTRAINT "Insurance_card_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_commercialautoquoteelements Insurance_commercialautoquoteelements_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_commercialautoquoteelements"
    ADD CONSTRAINT "Insurance_commercialautoquoteelements_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_company Insurance_company_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_company"
    ADD CONSTRAINT "Insurance_company_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_coveredauto Insurance_coveredauto_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_coveredauto"
    ADD CONSTRAINT "Insurance_coveredauto_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_crypto Insurance_crypto_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_crypto"
    ADD CONSTRAINT "Insurance_crypto_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_customer_groups Insurance_customer_groups_customer_id_group_id_65a47ee6_uniq; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_customer_groups"
    ADD CONSTRAINT "Insurance_customer_groups_customer_id_group_id_65a47ee6_uniq" UNIQUE (customer_id, group_id);


--
-- Name: Insurance_customer_groups Insurance_customer_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_customer_groups"
    ADD CONSTRAINT "Insurance_customer_groups_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_customer Insurance_customer_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_customer"
    ADD CONSTRAINT "Insurance_customer_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_customer_user_permissions Insurance_customer_user__customer_id_permission_i_09f4b28d_uniq; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_customer_user_permissions"
    ADD CONSTRAINT "Insurance_customer_user__customer_id_permission_i_09f4b28d_uniq" UNIQUE (customer_id, permission_id);


--
-- Name: Insurance_customer_user_permissions Insurance_customer_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_customer_user_permissions"
    ADD CONSTRAINT "Insurance_customer_user_permissions_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_customer Insurance_customer_username_key; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_customer"
    ADD CONSTRAINT "Insurance_customer_username_key" UNIQUE (username);


--
-- Name: Insurance_endorsement_endorsementPayments Insurance_endorsement_en_endorsement_id_payment_i_0fd218a0_uniq; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_endorsement_endorsementPayments"
    ADD CONSTRAINT "Insurance_endorsement_en_endorsement_id_payment_i_0fd218a0_uniq" UNIQUE (endorsement_id, payment_id);


--
-- Name: Insurance_endorsement_endorsementUWFiles Insurance_endorsement_en_endorsement_id_uwfile_id_56a45c71_uniq; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_endorsement_endorsementUWFiles"
    ADD CONSTRAINT "Insurance_endorsement_en_endorsement_id_uwfile_id_56a45c71_uniq" UNIQUE (endorsement_id, uwfile_id);


--
-- Name: Insurance_endorsement_endorsementDocuments Insurance_endorsement_en_endorsement_id_uwfile_id_f3ca5d17_uniq; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_endorsement_endorsementDocuments"
    ADD CONSTRAINT "Insurance_endorsement_en_endorsement_id_uwfile_id_f3ca5d17_uniq" UNIQUE (endorsement_id, uwfile_id);


--
-- Name: Insurance_endorsement_endorsementDocuments Insurance_endorsement_endorsementDocuments_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_endorsement_endorsementDocuments"
    ADD CONSTRAINT "Insurance_endorsement_endorsementDocuments_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_endorsement Insurance_endorsement_endorsementPayment_id_key; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_endorsement"
    ADD CONSTRAINT "Insurance_endorsement_endorsementPayment_id_key" UNIQUE ("endorsementPayment_id");


--
-- Name: Insurance_endorsement_endorsementPayments Insurance_endorsement_endorsementPayments_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_endorsement_endorsementPayments"
    ADD CONSTRAINT "Insurance_endorsement_endorsementPayments_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_endorsement_endorsementUWFiles Insurance_endorsement_endorsementUWFiles_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_endorsement_endorsementUWFiles"
    ADD CONSTRAINT "Insurance_endorsement_endorsementUWFiles_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_endorsement Insurance_endorsement_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_endorsement"
    ADD CONSTRAINT "Insurance_endorsement_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_healthquoteelements_additionalInsureds Insurance_healthquoteele_healthquoteelements_id_n_23ada6a4_uniq; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_healthquoteelements_additionalInsureds"
    ADD CONSTRAINT "Insurance_healthquoteele_healthquoteelements_id_n_23ada6a4_uniq" UNIQUE (healthquoteelements_id, namedinsured_id);


--
-- Name: Insurance_healthquoteelements_additionalInsureds Insurance_healthquoteelements_additionalInsureds_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_healthquoteelements_additionalInsureds"
    ADD CONSTRAINT "Insurance_healthquoteelements_additionalInsureds_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_healthquoteelements Insurance_healthquoteelements_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_healthquoteelements"
    ADD CONSTRAINT "Insurance_healthquoteelements_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_homequoteelements_additionalInsureds Insurance_homequoteeleme_homequoteelements_id_nam_c9b80bdd_uniq; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_homequoteelements_additionalInsureds"
    ADD CONSTRAINT "Insurance_homequoteeleme_homequoteelements_id_nam_c9b80bdd_uniq" UNIQUE (homequoteelements_id, namedinsured_id);


--
-- Name: Insurance_homequoteelements_additionalInsureds Insurance_homequoteelements_additionalInsureds_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_homequoteelements_additionalInsureds"
    ADD CONSTRAINT "Insurance_homequoteelements_additionalInsureds_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_homequoteelements Insurance_homequoteelements_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_homequoteelements"
    ADD CONSTRAINT "Insurance_homequoteelements_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_insurer Insurance_insurer_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_insurer"
    ADD CONSTRAINT "Insurance_insurer_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_lifequoteelements_additionalInsureds Insurance_lifequoteeleme_lifequoteelements_id_nam_70b6a64d_uniq; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_lifequoteelements_additionalInsureds"
    ADD CONSTRAINT "Insurance_lifequoteeleme_lifequoteelements_id_nam_70b6a64d_uniq" UNIQUE (lifequoteelements_id, namedinsured_id);


--
-- Name: Insurance_lifequoteelements_additionalInsureds Insurance_lifequoteelements_additionalInsureds_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_lifequoteelements_additionalInsureds"
    ADD CONSTRAINT "Insurance_lifequoteelements_additionalInsureds_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_lifequoteelements Insurance_lifequoteelements_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_lifequoteelements"
    ADD CONSTRAINT "Insurance_lifequoteelements_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_model Insurance_model_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_model"
    ADD CONSTRAINT "Insurance_model_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_namedinsured Insurance_namedinsured_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_namedinsured"
    ADD CONSTRAINT "Insurance_namedinsured_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_payment Insurance_payment_paymentMethod_id_key; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_payment"
    ADD CONSTRAINT "Insurance_payment_paymentMethod_id_key" UNIQUE ("paymentMethod_id");


--
-- Name: Insurance_payment Insurance_payment_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_payment"
    ADD CONSTRAINT "Insurance_payment_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_paymentmethod Insurance_paymentmethod_bankAccount_id_key; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_paymentmethod"
    ADD CONSTRAINT "Insurance_paymentmethod_bankAccount_id_key" UNIQUE ("bankAccount_id");


--
-- Name: Insurance_paymentmethod Insurance_paymentmethod_card_id_key; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_paymentmethod"
    ADD CONSTRAINT "Insurance_paymentmethod_card_id_key" UNIQUE (card_id);


--
-- Name: Insurance_paymentmethod Insurance_paymentmethod_crypto_id_key; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_paymentmethod"
    ADD CONSTRAINT "Insurance_paymentmethod_crypto_id_key" UNIQUE (crypto_id);


--
-- Name: Insurance_paymentmethod Insurance_paymentmethod_paypal_id_key; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_paymentmethod"
    ADD CONSTRAINT "Insurance_paymentmethod_paypal_id_key" UNIQUE (paypal_id);


--
-- Name: Insurance_paymentmethod Insurance_paymentmethod_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_paymentmethod"
    ADD CONSTRAINT "Insurance_paymentmethod_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_paypal Insurance_paypal_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_paypal"
    ADD CONSTRAINT "Insurance_paypal_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_personalautoquoteelements_additionalInsureds Insurance_personalautoqu_personalautoquoteelement_43e23880_uniq; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_personalautoquoteelements_additionalInsureds"
    ADD CONSTRAINT "Insurance_personalautoqu_personalautoquoteelement_43e23880_uniq" UNIQUE (personalautoquoteelements_id, namedinsured_id);


--
-- Name: Insurance_personalautoquoteelements_additionalInsureds Insurance_personalautoquoteelements_additionalInsureds_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_personalautoquoteelements_additionalInsureds"
    ADD CONSTRAINT "Insurance_personalautoquoteelements_additionalInsureds_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_personalautoquoteelements Insurance_personalautoquoteelements_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_personalautoquoteelements"
    ADD CONSTRAINT "Insurance_personalautoquoteelements_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_personalimage Insurance_personalimage_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_personalimage"
    ADD CONSTRAINT "Insurance_personalimage_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_picktrimentry Insurance_picktrimentry_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_picktrimentry"
    ADD CONSTRAINT "Insurance_picktrimentry_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_policy Insurance_policy_downPayment_id_key; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_policy"
    ADD CONSTRAINT "Insurance_policy_downPayment_id_key" UNIQUE ("downPayment_id");


--
-- Name: Insurance_policy Insurance_policy_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_policy"
    ADD CONSTRAINT "Insurance_policy_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_policy_policyDocuments Insurance_policy_policyD_policy_id_uwfile_id_86a2d0f8_uniq; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_policy_policyDocuments"
    ADD CONSTRAINT "Insurance_policy_policyD_policy_id_uwfile_id_86a2d0f8_uniq" UNIQUE (policy_id, uwfile_id);


--
-- Name: Insurance_policy_policyDocuments Insurance_policy_policyDocuments_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_policy_policyDocuments"
    ADD CONSTRAINT "Insurance_policy_policyDocuments_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_policy_policyPayments Insurance_policy_policyP_policy_id_payment_id_70d4ee4d_uniq; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_policy_policyPayments"
    ADD CONSTRAINT "Insurance_policy_policyP_policy_id_payment_id_70d4ee4d_uniq" UNIQUE (policy_id, payment_id);


--
-- Name: Insurance_policy_policyPayments Insurance_policy_policyPayments_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_policy_policyPayments"
    ADD CONSTRAINT "Insurance_policy_policyPayments_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_policy_policyUWFiles Insurance_policy_policyUWFiles_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_policy_policyUWFiles"
    ADD CONSTRAINT "Insurance_policy_policyUWFiles_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_policy_policyUWFiles Insurance_policy_policyU_policy_id_uwfile_id_2e5d302b_uniq; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_policy_policyUWFiles"
    ADD CONSTRAINT "Insurance_policy_policyU_policy_id_uwfile_id_2e5d302b_uniq" UNIQUE (policy_id, uwfile_id);


--
-- Name: Insurance_priorinsurance Insurance_priorinsurance_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_priorinsurance"
    ADD CONSTRAINT "Insurance_priorinsurance_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_priorinsurance Insurance_priorinsurance_priorDocument_id_key; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_priorinsurance"
    ADD CONSTRAINT "Insurance_priorinsurance_priorDocument_id_key" UNIQUE ("priorDocument_id");


--
-- Name: Insurance_quote Insurance_quote_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_quote"
    ADD CONSTRAINT "Insurance_quote_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_quoteline Insurance_quoteline_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_quoteline"
    ADD CONSTRAINT "Insurance_quoteline_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_supportchat Insurance_supportchat_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_supportchat"
    ADD CONSTRAINT "Insurance_supportchat_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_supportmessage Insurance_supportmessage_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_supportmessage"
    ADD CONSTRAINT "Insurance_supportmessage_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_uwfile Insurance_uwfile_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_uwfile"
    ADD CONSTRAINT "Insurance_uwfile_pkey" PRIMARY KEY (id);


--
-- Name: Insurance_yearentry Insurance_yearentry_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_yearentry"
    ADD CONSTRAINT "Insurance_yearentry_pkey" PRIMARY KEY (id);


--
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: Insurance_agency_agencyAddress_id_82fd9e41; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_agency_agencyAddress_id_82fd9e41" ON public."Insurance_agency" USING btree ("agencyAddress_id");


--
-- Name: Insurance_agency_agencyDocuments_agency_id_4812ec46; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_agency_agencyDocuments_agency_id_4812ec46" ON public."Insurance_agency_agencyDocuments" USING btree (agency_id);


--
-- Name: Insurance_agency_agencyDocuments_uwfile_id_c7f9c7c2; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_agency_agencyDocuments_uwfile_id_c7f9c7c2" ON public."Insurance_agency_agencyDocuments" USING btree (uwfile_id);


--
-- Name: Insurance_agency_agencyOwner_id_c4c4f298; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_agency_agencyOwner_id_c4c4f298" ON public."Insurance_agency" USING btree ("agencyOwner_id");


--
-- Name: Insurance_agency_agencyUWFiles_agency_id_7ba6942e; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_agency_agencyUWFiles_agency_id_7ba6942e" ON public."Insurance_agency_agencyUWFiles" USING btree (agency_id);


--
-- Name: Insurance_agency_agencyUWFiles_uwfile_id_ceed0986; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_agency_agencyUWFiles_uwfile_id_ceed0986" ON public."Insurance_agency_agencyUWFiles" USING btree (uwfile_id);


--
-- Name: Insurance_agencyappointment_agency_id_1bffc49c; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_agencyappointment_agency_id_1bffc49c" ON public."Insurance_agencyappointment" USING btree (agency_id);


--
-- Name: Insurance_agencyappointment_insurer_id_24946545; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_agencyappointment_insurer_id_24946545" ON public."Insurance_agencyappointment" USING btree (insurer_id);


--
-- Name: Insurance_authorizedagent_agent_id_d01368e3; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_authorizedagent_agent_id_d01368e3" ON public."Insurance_authorizedagent" USING btree (agent_id);


--
-- Name: Insurance_bankaccount_owner_id_dfcfc65c; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_bankaccount_owner_id_dfcfc65c" ON public."Insurance_bankaccount" USING btree (owner_id);


--
-- Name: Insurance_bodystyleentry_yearEntry_id_58baf19f; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_bodystyleentry_yearEntry_id_58baf19f" ON public."Insurance_bodystyleentry" USING btree ("yearEntry_id");


--
-- Name: Insurance_businessquoteelements_mainInsured_id_f3d047df; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_businessquoteelements_mainInsured_id_f3d047df" ON public."Insurance_businessquoteelements" USING btree ("mainInsured_id");


--
-- Name: Insurance_businessquoteelements_quote_id_18114bed; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_businessquoteelements_quote_id_18114bed" ON public."Insurance_businessquoteelements" USING btree (quote_id);


--
-- Name: Insurance_car_customer_id_74e79bbe; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_car_customer_id_74e79bbe" ON public."Insurance_car" USING btree (customer_id);


--
-- Name: Insurance_card_owner_id_80d8c392; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_card_owner_id_80d8c392" ON public."Insurance_card" USING btree (owner_id);


--
-- Name: Insurance_commercialautoquoteelements_mainInsured_id_900d0f4a; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_commercialautoquoteelements_mainInsured_id_900d0f4a" ON public."Insurance_commercialautoquoteelements" USING btree ("mainInsured_id");


--
-- Name: Insurance_commercialautoquoteelements_quote_id_4febfa55; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_commercialautoquoteelements_quote_id_4febfa55" ON public."Insurance_commercialautoquoteelements" USING btree (quote_id);


--
-- Name: Insurance_company_companyAddress_id_641fdf6e; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_company_companyAddress_id_641fdf6e" ON public."Insurance_company" USING btree ("companyAddress_id");


--
-- Name: Insurance_company_companyOwner_id_94492294; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_company_companyOwner_id_94492294" ON public."Insurance_company" USING btree ("companyOwner_id");


--
-- Name: Insurance_coveredauto_autoquotelements_id_1ad89af8; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_coveredauto_autoquotelements_id_1ad89af8" ON public."Insurance_coveredauto" USING btree (autoquotelements_id);


--
-- Name: Insurance_coveredauto_car_id_d78a992c; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_coveredauto_car_id_d78a992c" ON public."Insurance_coveredauto" USING btree (car_id);


--
-- Name: Insurance_crypto_owner_id_03913a98; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_crypto_owner_id_03913a98" ON public."Insurance_crypto" USING btree (owner_id);


--
-- Name: Insurance_customer_address_id_bf9c5c48; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_customer_address_id_bf9c5c48" ON public."Insurance_customer" USING btree (address_id);


--
-- Name: Insurance_customer_groups_customer_id_5ac15989; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_customer_groups_customer_id_5ac15989" ON public."Insurance_customer_groups" USING btree (customer_id);


--
-- Name: Insurance_customer_groups_group_id_26969f53; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_customer_groups_group_id_26969f53" ON public."Insurance_customer_groups" USING btree (group_id);


--
-- Name: Insurance_customer_profilePicture_id_12ff1447; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_customer_profilePicture_id_12ff1447" ON public."Insurance_customer" USING btree ("profilePicture_id");


--
-- Name: Insurance_customer_user_permissions_customer_id_94839bd7; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_customer_user_permissions_customer_id_94839bd7" ON public."Insurance_customer_user_permissions" USING btree (customer_id);


--
-- Name: Insurance_customer_user_permissions_permission_id_9bad50bd; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_customer_user_permissions_permission_id_9bad50bd" ON public."Insurance_customer_user_permissions" USING btree (permission_id);


--
-- Name: Insurance_customer_username_42f9b05b_like; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_customer_username_42f9b05b_like" ON public."Insurance_customer" USING btree (username varchar_pattern_ops);


--
-- Name: Insurance_endorsement_endo_endorsement_id_2428b81d; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_endorsement_endo_endorsement_id_2428b81d" ON public."Insurance_endorsement_endorsementDocuments" USING btree (endorsement_id);


--
-- Name: Insurance_endorsement_endo_endorsement_id_33e75dc4; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_endorsement_endo_endorsement_id_33e75dc4" ON public."Insurance_endorsement_endorsementPayments" USING btree (endorsement_id);


--
-- Name: Insurance_endorsement_endo_endorsement_id_6c9b7519; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_endorsement_endo_endorsement_id_6c9b7519" ON public."Insurance_endorsement_endorsementUWFiles" USING btree (endorsement_id);


--
-- Name: Insurance_endorsement_endorsementDocuments_uwfile_id_4e7aecc7; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_endorsement_endorsementDocuments_uwfile_id_4e7aecc7" ON public."Insurance_endorsement_endorsementDocuments" USING btree (uwfile_id);


--
-- Name: Insurance_endorsement_endorsementPayments_payment_id_fbd23aa1; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_endorsement_endorsementPayments_payment_id_fbd23aa1" ON public."Insurance_endorsement_endorsementPayments" USING btree (payment_id);


--
-- Name: Insurance_endorsement_endorsementUWFiles_uwfile_id_16a564cb; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_endorsement_endorsementUWFiles_uwfile_id_16a564cb" ON public."Insurance_endorsement_endorsementUWFiles" USING btree (uwfile_id);


--
-- Name: Insurance_endorsement_policy_id_d7c3ab90; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_endorsement_policy_id_d7c3ab90" ON public."Insurance_endorsement" USING btree (policy_id);


--
-- Name: Insurance_endorsement_quote_id_24ea8bc7; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_endorsement_quote_id_24ea8bc7" ON public."Insurance_endorsement" USING btree (quote_id);


--
-- Name: Insurance_healthquoteeleme_healthquoteelements_id_daa56411; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_healthquoteeleme_healthquoteelements_id_daa56411" ON public."Insurance_healthquoteelements_additionalInsureds" USING btree (healthquoteelements_id);


--
-- Name: Insurance_healthquoteeleme_namedinsured_id_26c10a01; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_healthquoteeleme_namedinsured_id_26c10a01" ON public."Insurance_healthquoteelements_additionalInsureds" USING btree (namedinsured_id);


--
-- Name: Insurance_healthquoteelements_mainInsured_id_ef28e5dc; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_healthquoteelements_mainInsured_id_ef28e5dc" ON public."Insurance_healthquoteelements" USING btree ("mainInsured_id");


--
-- Name: Insurance_healthquoteelements_quote_id_4e9f5f78; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_healthquoteelements_quote_id_4e9f5f78" ON public."Insurance_healthquoteelements" USING btree (quote_id);


--
-- Name: Insurance_homequoteelement_homequoteelements_id_ad9e08cd; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_homequoteelement_homequoteelements_id_ad9e08cd" ON public."Insurance_homequoteelements_additionalInsureds" USING btree (homequoteelements_id);


--
-- Name: Insurance_homequoteelement_namedinsured_id_06f09016; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_homequoteelement_namedinsured_id_06f09016" ON public."Insurance_homequoteelements_additionalInsureds" USING btree (namedinsured_id);


--
-- Name: Insurance_homequoteelements_mainInsured_id_486b50eb; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_homequoteelements_mainInsured_id_486b50eb" ON public."Insurance_homequoteelements" USING btree ("mainInsured_id");


--
-- Name: Insurance_homequoteelements_propertyAddress_id_13624360; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_homequoteelements_propertyAddress_id_13624360" ON public."Insurance_homequoteelements" USING btree ("propertyAddress_id");


--
-- Name: Insurance_homequoteelements_quote_id_5d85a031; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_homequoteelements_quote_id_5d85a031" ON public."Insurance_homequoteelements" USING btree (quote_id);


--
-- Name: Insurance_lifequoteelement_lifequoteelements_id_8effcb73; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_lifequoteelement_lifequoteelements_id_8effcb73" ON public."Insurance_lifequoteelements_additionalInsureds" USING btree (lifequoteelements_id);


--
-- Name: Insurance_lifequoteelement_namedinsured_id_869a7af9; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_lifequoteelement_namedinsured_id_869a7af9" ON public."Insurance_lifequoteelements_additionalInsureds" USING btree (namedinsured_id);


--
-- Name: Insurance_lifequoteelements_mainInsured_id_a4a65c04; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_lifequoteelements_mainInsured_id_a4a65c04" ON public."Insurance_lifequoteelements" USING btree ("mainInsured_id");


--
-- Name: Insurance_lifequoteelements_quote_id_a64c191a; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_lifequoteelements_quote_id_a64c191a" ON public."Insurance_lifequoteelements" USING btree (quote_id);


--
-- Name: Insurance_model_brand_id_98a81dde; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_model_brand_id_98a81dde" ON public."Insurance_model" USING btree (brand_id);


--
-- Name: Insurance_namedinsured_customer_id_bb589e7b; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_namedinsured_customer_id_bb589e7b" ON public."Insurance_namedinsured" USING btree (customer_id);


--
-- Name: Insurance_paymentmethod_owner_id_a446e47e; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_paymentmethod_owner_id_a446e47e" ON public."Insurance_paymentmethod" USING btree (owner_id);


--
-- Name: Insurance_paypal_owner_id_b9057900; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_paypal_owner_id_b9057900" ON public."Insurance_paypal" USING btree (owner_id);


--
-- Name: Insurance_personalautoquot_namedinsured_id_6f5bbdf5; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_personalautoquot_namedinsured_id_6f5bbdf5" ON public."Insurance_personalautoquoteelements_additionalInsureds" USING btree (namedinsured_id);


--
-- Name: Insurance_personalautoquot_personalautoquoteelements__00a89e2c; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_personalautoquot_personalautoquoteelements__00a89e2c" ON public."Insurance_personalautoquoteelements_additionalInsureds" USING btree (personalautoquoteelements_id);


--
-- Name: Insurance_personalautoquoteelements_mainInsured_id_648c41f4; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_personalautoquoteelements_mainInsured_id_648c41f4" ON public."Insurance_personalautoquoteelements" USING btree ("mainInsured_id");


--
-- Name: Insurance_personalautoquoteelements_quote_id_128bc923; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_personalautoquoteelements_quote_id_128bc923" ON public."Insurance_personalautoquoteelements" USING btree (quote_id);


--
-- Name: Insurance_picktrimentry_bodyStyle_id_d641d969; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_picktrimentry_bodyStyle_id_d641d969" ON public."Insurance_picktrimentry" USING btree ("bodyStyle_id");


--
-- Name: Insurance_policy_agency_id_111ca3b4; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_policy_agency_id_111ca3b4" ON public."Insurance_policy" USING btree (agency_id);


--
-- Name: Insurance_policy_policyDocuments_policy_id_270cc144; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_policy_policyDocuments_policy_id_270cc144" ON public."Insurance_policy_policyDocuments" USING btree (policy_id);


--
-- Name: Insurance_policy_policyDocuments_uwfile_id_48e6d19a; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_policy_policyDocuments_uwfile_id_48e6d19a" ON public."Insurance_policy_policyDocuments" USING btree (uwfile_id);


--
-- Name: Insurance_policy_policyHolder_id_b00df663; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_policy_policyHolder_id_b00df663" ON public."Insurance_policy" USING btree ("policyHolder_id");


--
-- Name: Insurance_policy_policyPayments_payment_id_af57291b; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_policy_policyPayments_payment_id_af57291b" ON public."Insurance_policy_policyPayments" USING btree (payment_id);


--
-- Name: Insurance_policy_policyPayments_policy_id_f03c5e82; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_policy_policyPayments_policy_id_f03c5e82" ON public."Insurance_policy_policyPayments" USING btree (policy_id);


--
-- Name: Insurance_policy_policyUWFiles_policy_id_878f1885; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_policy_policyUWFiles_policy_id_878f1885" ON public."Insurance_policy_policyUWFiles" USING btree (policy_id);


--
-- Name: Insurance_policy_policyUWFiles_uwfile_id_89b5d22d; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_policy_policyUWFiles_uwfile_id_89b5d22d" ON public."Insurance_policy_policyUWFiles" USING btree (uwfile_id);


--
-- Name: Insurance_policy_quote_id_7e970175; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_policy_quote_id_7e970175" ON public."Insurance_policy" USING btree (quote_id);


--
-- Name: Insurance_priorinsurance_customer_id_069a0419; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_priorinsurance_customer_id_069a0419" ON public."Insurance_priorinsurance" USING btree (customer_id);


--
-- Name: Insurance_priorinsurance_insurer_id_8a33f3f9; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_priorinsurance_insurer_id_8a33f3f9" ON public."Insurance_priorinsurance" USING btree (insurer_id);


--
-- Name: Insurance_priorinsurance_quote_id_e545580a; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_priorinsurance_quote_id_e545580a" ON public."Insurance_priorinsurance" USING btree (quote_id);


--
-- Name: Insurance_quote_agency_id_61eae345; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_quote_agency_id_61eae345" ON public."Insurance_quote" USING btree (agency_id);


--
-- Name: Insurance_quote_customer_id_caf9fb07; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_quote_customer_id_caf9fb07" ON public."Insurance_quote" USING btree (customer_id);


--
-- Name: Insurance_quoteline_insurer_id_6d70e7e6; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_quoteline_insurer_id_6d70e7e6" ON public."Insurance_quoteline" USING btree (insurer_id);


--
-- Name: Insurance_quoteline_quote_id_28268815; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_quoteline_quote_id_28268815" ON public."Insurance_quoteline" USING btree (quote_id);


--
-- Name: Insurance_supportchat_customer_id_133f9a36; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_supportchat_customer_id_133f9a36" ON public."Insurance_supportchat" USING btree (customer_id);


--
-- Name: Insurance_supportmessage_sender_id_a5c98621; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_supportmessage_sender_id_a5c98621" ON public."Insurance_supportmessage" USING btree (sender_id);


--
-- Name: Insurance_supportmessage_supportChat_id_2b6c9aab; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_supportmessage_supportChat_id_2b6c9aab" ON public."Insurance_supportmessage" USING btree ("supportChat_id");


--
-- Name: Insurance_uwfile_customer_id_96648a37; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_uwfile_customer_id_96648a37" ON public."Insurance_uwfile" USING btree (customer_id);


--
-- Name: Insurance_yearentry_model_id_2fdf20d3; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX "Insurance_yearentry_model_id_2fdf20d3" ON public."Insurance_yearentry" USING btree (model_id);


--
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: donjerson
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: Insurance_agency_agencyDocuments Insurance_agency_age_agency_id_4812ec46_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_agency_agencyDocuments"
    ADD CONSTRAINT "Insurance_agency_age_agency_id_4812ec46_fk_Insurance" FOREIGN KEY (agency_id) REFERENCES public."Insurance_agency"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_agency_agencyUWFiles Insurance_agency_age_agency_id_7ba6942e_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_agency_agencyUWFiles"
    ADD CONSTRAINT "Insurance_agency_age_agency_id_7ba6942e_fk_Insurance" FOREIGN KEY (agency_id) REFERENCES public."Insurance_agency"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_agency_agencyDocuments Insurance_agency_age_uwfile_id_c7f9c7c2_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_agency_agencyDocuments"
    ADD CONSTRAINT "Insurance_agency_age_uwfile_id_c7f9c7c2_fk_Insurance" FOREIGN KEY (uwfile_id) REFERENCES public."Insurance_uwfile"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_agency_agencyUWFiles Insurance_agency_age_uwfile_id_ceed0986_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_agency_agencyUWFiles"
    ADD CONSTRAINT "Insurance_agency_age_uwfile_id_ceed0986_fk_Insurance" FOREIGN KEY (uwfile_id) REFERENCES public."Insurance_uwfile"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_agency Insurance_agency_agencyAddress_id_82fd9e41_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_agency"
    ADD CONSTRAINT "Insurance_agency_agencyAddress_id_82fd9e41_fk_Insurance" FOREIGN KEY ("agencyAddress_id") REFERENCES public."Insurance_address"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_agency Insurance_agency_agencyOwner_id_c4c4f298_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_agency"
    ADD CONSTRAINT "Insurance_agency_agencyOwner_id_c4c4f298_fk_Insurance" FOREIGN KEY ("agencyOwner_id") REFERENCES public."Insurance_customer"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_agencyappointment Insurance_agencyappo_agency_id_1bffc49c_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_agencyappointment"
    ADD CONSTRAINT "Insurance_agencyappo_agency_id_1bffc49c_fk_Insurance" FOREIGN KEY (agency_id) REFERENCES public."Insurance_agency"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_agencyappointment Insurance_agencyappo_insurer_id_24946545_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_agencyappointment"
    ADD CONSTRAINT "Insurance_agencyappo_insurer_id_24946545_fk_Insurance" FOREIGN KEY (insurer_id) REFERENCES public."Insurance_insurer"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_authorizedagent Insurance_authorized_agent_id_d01368e3_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_authorizedagent"
    ADD CONSTRAINT "Insurance_authorized_agent_id_d01368e3_fk_Insurance" FOREIGN KEY (agent_id) REFERENCES public."Insurance_agency"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_bankaccount Insurance_bankaccoun_owner_id_dfcfc65c_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_bankaccount"
    ADD CONSTRAINT "Insurance_bankaccoun_owner_id_dfcfc65c_fk_Insurance" FOREIGN KEY (owner_id) REFERENCES public."Insurance_customer"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_bodystyleentry Insurance_bodystylee_yearEntry_id_58baf19f_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_bodystyleentry"
    ADD CONSTRAINT "Insurance_bodystylee_yearEntry_id_58baf19f_fk_Insurance" FOREIGN KEY ("yearEntry_id") REFERENCES public."Insurance_yearentry"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_businessquoteelements Insurance_businessqu_mainInsured_id_f3d047df_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_businessquoteelements"
    ADD CONSTRAINT "Insurance_businessqu_mainInsured_id_f3d047df_fk_Insurance" FOREIGN KEY ("mainInsured_id") REFERENCES public."Insurance_company"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_businessquoteelements Insurance_businessqu_quote_id_18114bed_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_businessquoteelements"
    ADD CONSTRAINT "Insurance_businessqu_quote_id_18114bed_fk_Insurance" FOREIGN KEY (quote_id) REFERENCES public."Insurance_quote"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_car Insurance_car_customer_id_74e79bbe_fk_Insurance_customer_id; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_car"
    ADD CONSTRAINT "Insurance_car_customer_id_74e79bbe_fk_Insurance_customer_id" FOREIGN KEY (customer_id) REFERENCES public."Insurance_customer"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_card Insurance_card_owner_id_80d8c392_fk_Insurance_customer_id; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_card"
    ADD CONSTRAINT "Insurance_card_owner_id_80d8c392_fk_Insurance_customer_id" FOREIGN KEY (owner_id) REFERENCES public."Insurance_customer"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_commercialautoquoteelements Insurance_commercial_mainInsured_id_900d0f4a_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_commercialautoquoteelements"
    ADD CONSTRAINT "Insurance_commercial_mainInsured_id_900d0f4a_fk_Insurance" FOREIGN KEY ("mainInsured_id") REFERENCES public."Insurance_company"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_commercialautoquoteelements Insurance_commercial_quote_id_4febfa55_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_commercialautoquoteelements"
    ADD CONSTRAINT "Insurance_commercial_quote_id_4febfa55_fk_Insurance" FOREIGN KEY (quote_id) REFERENCES public."Insurance_quote"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_company Insurance_company_companyAddress_id_641fdf6e_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_company"
    ADD CONSTRAINT "Insurance_company_companyAddress_id_641fdf6e_fk_Insurance" FOREIGN KEY ("companyAddress_id") REFERENCES public."Insurance_address"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_company Insurance_company_companyOwner_id_94492294_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_company"
    ADD CONSTRAINT "Insurance_company_companyOwner_id_94492294_fk_Insurance" FOREIGN KEY ("companyOwner_id") REFERENCES public."Insurance_customer"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_coveredauto Insurance_coveredaut_autoquotelements_id_1ad89af8_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_coveredauto"
    ADD CONSTRAINT "Insurance_coveredaut_autoquotelements_id_1ad89af8_fk_Insurance" FOREIGN KEY (autoquotelements_id) REFERENCES public."Insurance_personalautoquoteelements"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_coveredauto Insurance_coveredauto_car_id_d78a992c_fk_Insurance_car_id; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_coveredauto"
    ADD CONSTRAINT "Insurance_coveredauto_car_id_d78a992c_fk_Insurance_car_id" FOREIGN KEY (car_id) REFERENCES public."Insurance_car"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_crypto Insurance_crypto_owner_id_03913a98_fk_Insurance_customer_id; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_crypto"
    ADD CONSTRAINT "Insurance_crypto_owner_id_03913a98_fk_Insurance_customer_id" FOREIGN KEY (owner_id) REFERENCES public."Insurance_customer"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_customer Insurance_customer_address_id_bf9c5c48_fk_Insurance_address_id; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_customer"
    ADD CONSTRAINT "Insurance_customer_address_id_bf9c5c48_fk_Insurance_address_id" FOREIGN KEY (address_id) REFERENCES public."Insurance_address"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_customer_groups Insurance_customer_g_customer_id_5ac15989_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_customer_groups"
    ADD CONSTRAINT "Insurance_customer_g_customer_id_5ac15989_fk_Insurance" FOREIGN KEY (customer_id) REFERENCES public."Insurance_customer"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_customer_groups Insurance_customer_groups_group_id_26969f53_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_customer_groups"
    ADD CONSTRAINT "Insurance_customer_groups_group_id_26969f53_fk_auth_group_id" FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_customer Insurance_customer_profilePicture_id_12ff1447_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_customer"
    ADD CONSTRAINT "Insurance_customer_profilePicture_id_12ff1447_fk_Insurance" FOREIGN KEY ("profilePicture_id") REFERENCES public."Insurance_personalimage"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_customer_user_permissions Insurance_customer_u_customer_id_94839bd7_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_customer_user_permissions"
    ADD CONSTRAINT "Insurance_customer_u_customer_id_94839bd7_fk_Insurance" FOREIGN KEY (customer_id) REFERENCES public."Insurance_customer"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_customer_user_permissions Insurance_customer_u_permission_id_9bad50bd_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_customer_user_permissions"
    ADD CONSTRAINT "Insurance_customer_u_permission_id_9bad50bd_fk_auth_perm" FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_endorsement Insurance_endorsemen_endorsementPayment_i_5226e833_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_endorsement"
    ADD CONSTRAINT "Insurance_endorsemen_endorsementPayment_i_5226e833_fk_Insurance" FOREIGN KEY ("endorsementPayment_id") REFERENCES public."Insurance_payment"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_endorsement_endorsementDocuments Insurance_endorsemen_endorsement_id_2428b81d_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_endorsement_endorsementDocuments"
    ADD CONSTRAINT "Insurance_endorsemen_endorsement_id_2428b81d_fk_Insurance" FOREIGN KEY (endorsement_id) REFERENCES public."Insurance_endorsement"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_endorsement_endorsementPayments Insurance_endorsemen_endorsement_id_33e75dc4_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_endorsement_endorsementPayments"
    ADD CONSTRAINT "Insurance_endorsemen_endorsement_id_33e75dc4_fk_Insurance" FOREIGN KEY (endorsement_id) REFERENCES public."Insurance_endorsement"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_endorsement_endorsementUWFiles Insurance_endorsemen_endorsement_id_6c9b7519_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_endorsement_endorsementUWFiles"
    ADD CONSTRAINT "Insurance_endorsemen_endorsement_id_6c9b7519_fk_Insurance" FOREIGN KEY (endorsement_id) REFERENCES public."Insurance_endorsement"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_endorsement_endorsementPayments Insurance_endorsemen_payment_id_fbd23aa1_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_endorsement_endorsementPayments"
    ADD CONSTRAINT "Insurance_endorsemen_payment_id_fbd23aa1_fk_Insurance" FOREIGN KEY (payment_id) REFERENCES public."Insurance_payment"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_endorsement_endorsementUWFiles Insurance_endorsemen_uwfile_id_16a564cb_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_endorsement_endorsementUWFiles"
    ADD CONSTRAINT "Insurance_endorsemen_uwfile_id_16a564cb_fk_Insurance" FOREIGN KEY (uwfile_id) REFERENCES public."Insurance_uwfile"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_endorsement_endorsementDocuments Insurance_endorsemen_uwfile_id_4e7aecc7_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_endorsement_endorsementDocuments"
    ADD CONSTRAINT "Insurance_endorsemen_uwfile_id_4e7aecc7_fk_Insurance" FOREIGN KEY (uwfile_id) REFERENCES public."Insurance_uwfile"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_endorsement Insurance_endorsement_policy_id_d7c3ab90_fk_Insurance_policy_id; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_endorsement"
    ADD CONSTRAINT "Insurance_endorsement_policy_id_d7c3ab90_fk_Insurance_policy_id" FOREIGN KEY (policy_id) REFERENCES public."Insurance_policy"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_endorsement Insurance_endorsement_quote_id_24ea8bc7_fk_Insurance_quote_id; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_endorsement"
    ADD CONSTRAINT "Insurance_endorsement_quote_id_24ea8bc7_fk_Insurance_quote_id" FOREIGN KEY (quote_id) REFERENCES public."Insurance_quote"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_healthquoteelements_additionalInsureds Insurance_healthquot_healthquoteelements__daa56411_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_healthquoteelements_additionalInsureds"
    ADD CONSTRAINT "Insurance_healthquot_healthquoteelements__daa56411_fk_Insurance" FOREIGN KEY (healthquoteelements_id) REFERENCES public."Insurance_healthquoteelements"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_healthquoteelements Insurance_healthquot_mainInsured_id_ef28e5dc_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_healthquoteelements"
    ADD CONSTRAINT "Insurance_healthquot_mainInsured_id_ef28e5dc_fk_Insurance" FOREIGN KEY ("mainInsured_id") REFERENCES public."Insurance_namedinsured"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_healthquoteelements_additionalInsureds Insurance_healthquot_namedinsured_id_26c10a01_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_healthquoteelements_additionalInsureds"
    ADD CONSTRAINT "Insurance_healthquot_namedinsured_id_26c10a01_fk_Insurance" FOREIGN KEY (namedinsured_id) REFERENCES public."Insurance_namedinsured"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_healthquoteelements Insurance_healthquot_quote_id_4e9f5f78_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_healthquoteelements"
    ADD CONSTRAINT "Insurance_healthquot_quote_id_4e9f5f78_fk_Insurance" FOREIGN KEY (quote_id) REFERENCES public."Insurance_quote"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_homequoteelements_additionalInsureds Insurance_homequotee_homequoteelements_id_ad9e08cd_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_homequoteelements_additionalInsureds"
    ADD CONSTRAINT "Insurance_homequotee_homequoteelements_id_ad9e08cd_fk_Insurance" FOREIGN KEY (homequoteelements_id) REFERENCES public."Insurance_homequoteelements"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_homequoteelements Insurance_homequotee_mainInsured_id_486b50eb_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_homequoteelements"
    ADD CONSTRAINT "Insurance_homequotee_mainInsured_id_486b50eb_fk_Insurance" FOREIGN KEY ("mainInsured_id") REFERENCES public."Insurance_namedinsured"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_homequoteelements_additionalInsureds Insurance_homequotee_namedinsured_id_06f09016_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_homequoteelements_additionalInsureds"
    ADD CONSTRAINT "Insurance_homequotee_namedinsured_id_06f09016_fk_Insurance" FOREIGN KEY (namedinsured_id) REFERENCES public."Insurance_namedinsured"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_homequoteelements Insurance_homequotee_propertyAddress_id_13624360_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_homequoteelements"
    ADD CONSTRAINT "Insurance_homequotee_propertyAddress_id_13624360_fk_Insurance" FOREIGN KEY ("propertyAddress_id") REFERENCES public."Insurance_address"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_homequoteelements Insurance_homequotee_quote_id_5d85a031_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_homequoteelements"
    ADD CONSTRAINT "Insurance_homequotee_quote_id_5d85a031_fk_Insurance" FOREIGN KEY (quote_id) REFERENCES public."Insurance_quote"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_lifequoteelements_additionalInsureds Insurance_lifequotee_lifequoteelements_id_8effcb73_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_lifequoteelements_additionalInsureds"
    ADD CONSTRAINT "Insurance_lifequotee_lifequoteelements_id_8effcb73_fk_Insurance" FOREIGN KEY (lifequoteelements_id) REFERENCES public."Insurance_lifequoteelements"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_lifequoteelements Insurance_lifequotee_mainInsured_id_a4a65c04_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_lifequoteelements"
    ADD CONSTRAINT "Insurance_lifequotee_mainInsured_id_a4a65c04_fk_Insurance" FOREIGN KEY ("mainInsured_id") REFERENCES public."Insurance_namedinsured"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_lifequoteelements_additionalInsureds Insurance_lifequotee_namedinsured_id_869a7af9_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_lifequoteelements_additionalInsureds"
    ADD CONSTRAINT "Insurance_lifequotee_namedinsured_id_869a7af9_fk_Insurance" FOREIGN KEY (namedinsured_id) REFERENCES public."Insurance_namedinsured"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_lifequoteelements Insurance_lifequotee_quote_id_a64c191a_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_lifequoteelements"
    ADD CONSTRAINT "Insurance_lifequotee_quote_id_a64c191a_fk_Insurance" FOREIGN KEY (quote_id) REFERENCES public."Insurance_quote"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_model Insurance_model_brand_id_98a81dde_fk_Insurance_brand_id; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_model"
    ADD CONSTRAINT "Insurance_model_brand_id_98a81dde_fk_Insurance_brand_id" FOREIGN KEY (brand_id) REFERENCES public."Insurance_brand"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_namedinsured Insurance_namedinsur_customer_id_bb589e7b_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_namedinsured"
    ADD CONSTRAINT "Insurance_namedinsur_customer_id_bb589e7b_fk_Insurance" FOREIGN KEY (customer_id) REFERENCES public."Insurance_customer"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_payment Insurance_payment_paymentMethod_id_60f627dc_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_payment"
    ADD CONSTRAINT "Insurance_payment_paymentMethod_id_60f627dc_fk_Insurance" FOREIGN KEY ("paymentMethod_id") REFERENCES public."Insurance_paymentmethod"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_paymentmethod Insurance_paymentmet_bankAccount_id_34d8bb3e_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_paymentmethod"
    ADD CONSTRAINT "Insurance_paymentmet_bankAccount_id_34d8bb3e_fk_Insurance" FOREIGN KEY ("bankAccount_id") REFERENCES public."Insurance_bankaccount"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_paymentmethod Insurance_paymentmet_crypto_id_d4920def_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_paymentmethod"
    ADD CONSTRAINT "Insurance_paymentmet_crypto_id_d4920def_fk_Insurance" FOREIGN KEY (crypto_id) REFERENCES public."Insurance_crypto"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_paymentmethod Insurance_paymentmet_owner_id_a446e47e_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_paymentmethod"
    ADD CONSTRAINT "Insurance_paymentmet_owner_id_a446e47e_fk_Insurance" FOREIGN KEY (owner_id) REFERENCES public."Insurance_customer"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_paymentmethod Insurance_paymentmet_paypal_id_fb417111_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_paymentmethod"
    ADD CONSTRAINT "Insurance_paymentmet_paypal_id_fb417111_fk_Insurance" FOREIGN KEY (paypal_id) REFERENCES public."Insurance_paypal"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_paymentmethod Insurance_paymentmethod_card_id_1650bb00_fk_Insurance_card_id; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_paymentmethod"
    ADD CONSTRAINT "Insurance_paymentmethod_card_id_1650bb00_fk_Insurance_card_id" FOREIGN KEY (card_id) REFERENCES public."Insurance_card"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_paypal Insurance_paypal_owner_id_b9057900_fk_Insurance_customer_id; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_paypal"
    ADD CONSTRAINT "Insurance_paypal_owner_id_b9057900_fk_Insurance_customer_id" FOREIGN KEY (owner_id) REFERENCES public."Insurance_customer"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_personalautoquoteelements Insurance_personalau_mainInsured_id_648c41f4_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_personalautoquoteelements"
    ADD CONSTRAINT "Insurance_personalau_mainInsured_id_648c41f4_fk_Insurance" FOREIGN KEY ("mainInsured_id") REFERENCES public."Insurance_namedinsured"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_personalautoquoteelements_additionalInsureds Insurance_personalau_namedinsured_id_6f5bbdf5_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_personalautoquoteelements_additionalInsureds"
    ADD CONSTRAINT "Insurance_personalau_namedinsured_id_6f5bbdf5_fk_Insurance" FOREIGN KEY (namedinsured_id) REFERENCES public."Insurance_namedinsured"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_personalautoquoteelements_additionalInsureds Insurance_personalau_personalautoquoteele_00a89e2c_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_personalautoquoteelements_additionalInsureds"
    ADD CONSTRAINT "Insurance_personalau_personalautoquoteele_00a89e2c_fk_Insurance" FOREIGN KEY (personalautoquoteelements_id) REFERENCES public."Insurance_personalautoquoteelements"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_personalautoquoteelements Insurance_personalau_quote_id_128bc923_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_personalautoquoteelements"
    ADD CONSTRAINT "Insurance_personalau_quote_id_128bc923_fk_Insurance" FOREIGN KEY (quote_id) REFERENCES public."Insurance_quote"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_picktrimentry Insurance_picktrimen_bodyStyle_id_d641d969_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_picktrimentry"
    ADD CONSTRAINT "Insurance_picktrimen_bodyStyle_id_d641d969_fk_Insurance" FOREIGN KEY ("bodyStyle_id") REFERENCES public."Insurance_bodystyleentry"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_policy Insurance_policy_agency_id_111ca3b4_fk_Insurance_agency_id; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_policy"
    ADD CONSTRAINT "Insurance_policy_agency_id_111ca3b4_fk_Insurance_agency_id" FOREIGN KEY (agency_id) REFERENCES public."Insurance_agency"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_policy Insurance_policy_downPayment_id_8b045477_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_policy"
    ADD CONSTRAINT "Insurance_policy_downPayment_id_8b045477_fk_Insurance" FOREIGN KEY ("downPayment_id") REFERENCES public."Insurance_payment"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_policy_policyPayments Insurance_policy_pol_payment_id_af57291b_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_policy_policyPayments"
    ADD CONSTRAINT "Insurance_policy_pol_payment_id_af57291b_fk_Insurance" FOREIGN KEY (payment_id) REFERENCES public."Insurance_payment"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_policy_policyDocuments Insurance_policy_pol_policy_id_270cc144_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_policy_policyDocuments"
    ADD CONSTRAINT "Insurance_policy_pol_policy_id_270cc144_fk_Insurance" FOREIGN KEY (policy_id) REFERENCES public."Insurance_policy"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_policy_policyUWFiles Insurance_policy_pol_policy_id_878f1885_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_policy_policyUWFiles"
    ADD CONSTRAINT "Insurance_policy_pol_policy_id_878f1885_fk_Insurance" FOREIGN KEY (policy_id) REFERENCES public."Insurance_policy"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_policy_policyPayments Insurance_policy_pol_policy_id_f03c5e82_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_policy_policyPayments"
    ADD CONSTRAINT "Insurance_policy_pol_policy_id_f03c5e82_fk_Insurance" FOREIGN KEY (policy_id) REFERENCES public."Insurance_policy"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_policy_policyDocuments Insurance_policy_pol_uwfile_id_48e6d19a_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_policy_policyDocuments"
    ADD CONSTRAINT "Insurance_policy_pol_uwfile_id_48e6d19a_fk_Insurance" FOREIGN KEY (uwfile_id) REFERENCES public."Insurance_uwfile"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_policy_policyUWFiles Insurance_policy_pol_uwfile_id_89b5d22d_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_policy_policyUWFiles"
    ADD CONSTRAINT "Insurance_policy_pol_uwfile_id_89b5d22d_fk_Insurance" FOREIGN KEY (uwfile_id) REFERENCES public."Insurance_uwfile"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_policy Insurance_policy_policyHolder_id_b00df663_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_policy"
    ADD CONSTRAINT "Insurance_policy_policyHolder_id_b00df663_fk_Insurance" FOREIGN KEY ("policyHolder_id") REFERENCES public."Insurance_customer"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_policy Insurance_policy_quote_id_7e970175_fk_Insurance_quote_id; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_policy"
    ADD CONSTRAINT "Insurance_policy_quote_id_7e970175_fk_Insurance_quote_id" FOREIGN KEY (quote_id) REFERENCES public."Insurance_quote"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_priorinsurance Insurance_priorinsur_customer_id_069a0419_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_priorinsurance"
    ADD CONSTRAINT "Insurance_priorinsur_customer_id_069a0419_fk_Insurance" FOREIGN KEY (customer_id) REFERENCES public."Insurance_customer"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_priorinsurance Insurance_priorinsur_insurer_id_8a33f3f9_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_priorinsurance"
    ADD CONSTRAINT "Insurance_priorinsur_insurer_id_8a33f3f9_fk_Insurance" FOREIGN KEY (insurer_id) REFERENCES public."Insurance_insurer"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_priorinsurance Insurance_priorinsur_priorDocument_id_e25fd4b5_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_priorinsurance"
    ADD CONSTRAINT "Insurance_priorinsur_priorDocument_id_e25fd4b5_fk_Insurance" FOREIGN KEY ("priorDocument_id") REFERENCES public."Insurance_uwfile"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_priorinsurance Insurance_priorinsur_quote_id_e545580a_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_priorinsurance"
    ADD CONSTRAINT "Insurance_priorinsur_quote_id_e545580a_fk_Insurance" FOREIGN KEY (quote_id) REFERENCES public."Insurance_quote"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_quote Insurance_quote_agency_id_61eae345_fk_Insurance_agency_id; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_quote"
    ADD CONSTRAINT "Insurance_quote_agency_id_61eae345_fk_Insurance_agency_id" FOREIGN KEY (agency_id) REFERENCES public."Insurance_agency"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_quote Insurance_quote_customer_id_caf9fb07_fk_Insurance_customer_id; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_quote"
    ADD CONSTRAINT "Insurance_quote_customer_id_caf9fb07_fk_Insurance_customer_id" FOREIGN KEY (customer_id) REFERENCES public."Insurance_customer"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_quoteline Insurance_quoteline_insurer_id_6d70e7e6_fk_Insurance_insurer_id; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_quoteline"
    ADD CONSTRAINT "Insurance_quoteline_insurer_id_6d70e7e6_fk_Insurance_insurer_id" FOREIGN KEY (insurer_id) REFERENCES public."Insurance_insurer"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_quoteline Insurance_quoteline_quote_id_28268815_fk_Insurance_quote_id; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_quoteline"
    ADD CONSTRAINT "Insurance_quoteline_quote_id_28268815_fk_Insurance_quote_id" FOREIGN KEY (quote_id) REFERENCES public."Insurance_quote"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_supportchat Insurance_supportcha_customer_id_133f9a36_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_supportchat"
    ADD CONSTRAINT "Insurance_supportcha_customer_id_133f9a36_fk_Insurance" FOREIGN KEY (customer_id) REFERENCES public."Insurance_customer"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_supportmessage Insurance_supportmes_sender_id_a5c98621_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_supportmessage"
    ADD CONSTRAINT "Insurance_supportmes_sender_id_a5c98621_fk_Insurance" FOREIGN KEY (sender_id) REFERENCES public."Insurance_customer"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_supportmessage Insurance_supportmes_supportChat_id_2b6c9aab_fk_Insurance; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_supportmessage"
    ADD CONSTRAINT "Insurance_supportmes_supportChat_id_2b6c9aab_fk_Insurance" FOREIGN KEY ("supportChat_id") REFERENCES public."Insurance_supportchat"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_uwfile Insurance_uwfile_customer_id_96648a37_fk_Insurance_customer_id; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_uwfile"
    ADD CONSTRAINT "Insurance_uwfile_customer_id_96648a37_fk_Insurance_customer_id" FOREIGN KEY (customer_id) REFERENCES public."Insurance_customer"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: Insurance_yearentry Insurance_yearentry_model_id_2fdf20d3_fk_Insurance_model_id; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public."Insurance_yearentry"
    ADD CONSTRAINT "Insurance_yearentry_model_id_2fdf20d3_fk_Insurance_model_id" FOREIGN KEY (model_id) REFERENCES public."Insurance_model"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_Insurance_customer_id; Type: FK CONSTRAINT; Schema: public; Owner: donjerson
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT "django_admin_log_user_id_c564eba6_fk_Insurance_customer_id" FOREIGN KEY (user_id) REFERENCES public."Insurance_customer"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

