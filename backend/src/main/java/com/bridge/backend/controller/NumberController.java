package com.bridge.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bridge.backend.model.Number;
import com.bridge.backend.service.NumberService;

@RestController
@RequestMapping("/numbers")
@CrossOrigin(origins = "*")
public class NumberController {

    @Autowired
	private NumberService numberService;
	
	@GetMapping
	public List<Number> getAll() {
		return numberService.getAll();
	}

    @PostMapping
	public Number insert(@RequestBody Number number) {
		numberService.insert(number);
		return number;
	}
}
