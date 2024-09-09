import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

// Un middleware sert à executer du code avant que la requête atteigne la route demander par une requete http
// Par exemple le logger ci dessous va faire un log console dès que l'on fait une requête au route qu'on définit ayant le
// middleware de définit
// la doc des middleware est ici https://docs.nestjs.com/middleware.

export function logger (req: Request, res: Response, next: NextFunction) {
  let res_code = 'Response code [' + res.statusCode.toString() + ']';
  let req_path_target = req.url;
  let req_method = req.method.toUpperCase();
  let req_adress_sender : string = req.ip;
  let timestamp = new Date().toISOString();
  let log : string = timestamp +' | '+ log_ip(req_adress_sender) +' | '+ req_method +' | ' + req_path_target + ' | '+ res_code ;
  console.log(log);
  next();
}

function log_ip (raw_ip: string): string {
  let treated_ip : string = '';
  if (raw_ip == '::1') {
    treated_ip = 'localhost'
  }
  else {
    let split = raw_ip.split(':')
    treated_ip = split[ split.length - 1 ];
  }
  return treated_ip;
}