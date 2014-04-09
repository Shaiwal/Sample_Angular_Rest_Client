package com.shaiwal.services;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.json.JSONObject;


@Path("/testGet")
public class TestGet{

	@GET
	@Path("/withoutParam")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public String GetRequestHandler(){
		JSONObject json = new JSONObject();
		json.put("Name", "Shaiwal Sharma");
		json.put("Request method ", "GET");
		json.put("Parameters", "No Params");
		return json.toString();
	}

	@GET
	@Path("/withParam")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public String GetRequestHandler(@QueryParam("name") String name ) throws Exception{
		if(name.equals("Shaiwal")){
			JSONObject json = new JSONObject();
			json.put("Name", "Shaiwal Sharma");
			json.put("Request method ", "GET");
			json.put("Parameters", "With Params");
			json.put("Parameter Received", "name=Shaiwal");
			return json.toString();
		}else{
			throw new Exception("Wrong Query Parameter");
		}
	}



}