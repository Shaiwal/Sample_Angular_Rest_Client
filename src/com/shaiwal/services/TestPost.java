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


@Path("/testPost")
public class TestPost{

	@POST
	@Path("/withoutParam")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public String GetRequestHandler(){
		JSONObject json = new JSONObject();
		json.put("Name", "Shaiwal Sharma");
		json.put("Request method ", "POST");
		json.put("Parameters", "No Params");
		return json.toString();
	}

	@POST
	@Path("/withParam")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public String GetRequestHandler(@QueryParam("fname") String fname, @QueryParam("lname") String lname) throws Exception{
		if(fname.equals("Shaiwal") && lname.equals("Sharma")){
			JSONObject json = new JSONObject();
			json.put("Name", "Shaiwal Sharma");
			json.put("Request method ", "POST");
			json.put("Parameters", "With Params");
			json.put("Parameter Received", "fname=Shaiwal and lname=Sharma");
			return json.toString();
		}else{
			throw new Exception("Wrong Query Parameter");
		}
	}
}