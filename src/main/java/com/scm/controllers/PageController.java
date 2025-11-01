package com.scm.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class PageController {

    @GetMapping("/home")
    public String home(Model model) {
        System.out.print("This is a home page");
        model.addAttribute("name","Java Technologies");
        model.addAttribute("Instagram", "vyshrawanP");
        return "home";
    }
    //for about page 

    @GetMapping("/about")
    public String about(Model model) {
        // this line is essential
        model.addAttribute("content", "about :: content");
        // this tells Thymeleaf to load base.html as the parent
        return "about";
    }



    //for service page
    @GetMapping("/service")
    public String servicePage(){
        return "service";
    }
    @GetMapping("/base")
    public String basePage(){
        return "base";
    }
    @GetMapping("/register")
    public String registerPage(){
        return "register";
    }
        @GetMapping("/login")
    public String loginPage(){
        return "login";
    }
        @GetMapping("/contact")
    public String contactPage(){
        return "contact";
    }
}
