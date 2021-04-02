package com.okteto.books;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookController {
	static final Logger logger = LoggerFactory.getLogger(Application.class);

	private final BookRepository repository;

	BookController(BookRepository repository) {
    	this.repository = repository;
  	}

	@GetMapping("/api/books")
	public Iterable<Book> list() {
		logger.info("return all books");
    	return repository.findAll();
  	}

	@PostMapping("/api/books")
  	Book newBook(@RequestBody Book newBook) {
		logger.info("saving book");
    	return repository.save(newBook);
  	}
}
