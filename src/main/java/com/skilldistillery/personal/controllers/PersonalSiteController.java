package com.skilldistillery.personal.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class PersonalSiteController {
	// @Autowired
	// private StateDAO stateDAO;
	//
	// public void setStateDAO(StateDAO stateDAO) {
	// this.stateDAO = stateDAO;
	// }

	@RequestMapping(path = "openPersonalInfo.do", method = RequestMethod.GET)
	public ModelAndView getPersonalInfo() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("WEB-INF/personalInfo.jsp");
		return mv;
	}
	
	@RequestMapping(path = "getResume", method = RequestMethod.GET)
	public ModelAndView getResume() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("WEB-INF/resume.jsp");
		return mv;
	}

	@RequestMapping(path = "getProjects", method = RequestMethod.GET)
	public ModelAndView getProjects() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("WEB-INF/projects.jsp");
		return mv;
	}
}
