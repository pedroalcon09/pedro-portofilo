import js from "../imgs/js.png";
import python from "../imgs/python.png";
import pg from "../imgs/pg.png";
import postman from "../imgs/postman.png";
import jest from "../imgs/jest.png";
import django from "../imgs/django.png";
import bootstrap from "../imgs/bootstrap.svg";
import docker from "../imgs/docker.png";
import react from "../imgs/react.png";
import html from "../imgs/html.png";
import css from "../imgs/css.png";
import sql from "../imgs/sql.png";
import vscode from "../imgs/vscode.png";
import git from "../imgs/git.png";
import pytest from "../imgs/pytest.png";
import trello from "../imgs/trello.png";
import clickup from "../imgs/clickup.png";
import wappler from "../imgs/wappler.png";
import leaflet from "../imgs/leaflet.png";
import google from "../imgs/google.png";
import node from "../imgs/node.png";
import sass from "../imgs/sass.svg";
import anthropic from "../imgs/anthropic.svg";
import cypress from "../imgs/cypress.svg";
import playwright from "../imgs/playwright.svg";
import mui from "../imgs/mui.svg";
import vercel from "../imgs/vercel.svg";
import digitalocean from "../imgs/digitalocean.svg";
import cloudflare from "../imgs/cloudflare.svg";

const rx = () => Math.floor(Math.random() * window.innerWidth - 50);
const ry = () => Math.floor(Math.random() * window.innerHeight - 50);

export const bubbles = [
  { img: "js", src: js, s: 1, x: rx(), y: ry() },
  { img: "python", src: python, s: 1, x: rx(), y: ry() },
  { img: "pg", src: pg, s: 0.8, x: rx(), y: ry() },
  { img: "postman", src: postman, s: 0.8, x: rx(), y: ry() },
  { img: "jest", src: jest, s: 0.8, x: rx(), y: ry() },
  { img: "django", src: django, s: 0.8, x: rx(), y: ry() },
  { img: "bootstrap", src: bootstrap, s: 1.2, x: rx(), y: ry() },
  { img: "docker", src: docker, s: 1.2, x: rx(), y: ry() },
  { img: "react", src: react, s: 1.2, x: rx(), y: ry() },
  { img: "html", src: html, s: 1.2, x: rx(), y: ry() },
  { img: "css", src: css, s: 1.2, x: rx(), y: ry() },
  { img: "sql", src: sql, s: 0.7, x: rx(), y: ry() },
  { img: "vscode", src: vscode, s: 0.7, x: rx(), y: ry() },
  { img: "git", src: git, s: 0.7, x: rx(), y: ry() },
  { img: "pytest", src: pytest, s: 0.7, x: rx(), y: ry() },
  { img: "trello", src: trello, s: 1.3, x: rx(), y: ry() },
  { img: "clickup", src: clickup, s: 1.6, x: rx(), y: ry() },
  { img: "wappler", src: wappler, s: 1.6, x: rx(), y: ry() },
  { img: "leaflet", src: leaflet, s: 1.4, x: rx(), y: ry() },
  { img: "google", src: google, s: 0.6, x: rx(), y: ry() },
  { img: "node", src: node, s: 1, x: rx(), y: ry() },
  { img: "sass", src: sass, s: 1, x: rx(), y: ry() },
  { img: "anthropic", src: anthropic, s: 0.9, x: rx(), y: ry() },
  { img: "cypress", src: cypress, s: 0.9, x: rx(), y: ry() },
  { img: "playwright", src: playwright, s: 0.9, x: rx(), y: ry() },
  { img: "mui", src: mui, s: 1, x: rx(), y: ry() },
  { img: "vercel", src: vercel, s: 0.8, x: rx(), y: ry() },
  { img: "digitalocean", src: digitalocean, s: 1, x: rx(), y: ry() },
  { img: "cloudflare", src: cloudflare, s: 1, x: rx(), y: ry() },
  { img: "googlemaps", src: google, s: 0.8, x: rx(), y: ry() },
];
