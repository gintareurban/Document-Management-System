package it.akademija.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import it.akademija.model.doctype.DocTypeComment;
import it.akademija.model.doctype.DocTypeForClient;
import it.akademija.model.doctype.NewDocType;
import it.akademija.service.DocTypeService;

@RestController
@RequestMapping(value = "/api/doctype")
public class DocTypeController {

	private static final Logger LOGGER = LoggerFactory.getLogger(DocTypeController.class);

	
	private final DocTypeService docTypeService;

	@Autowired
	public DocTypeController(DocTypeService docTypeService) {
		this.docTypeService = docTypeService;
	}

	@RequestMapping(method = RequestMethod.GET)
	@ApiOperation(value = "Get doc type names", notes = "Returns names of all doc types")
	public List<DocTypeForClient> getNamesOfDocTypeForClient() {
		return docTypeService.getDocTypeNamesForClient();
	}

	@RequestMapping(path = "/doc-types", method = RequestMethod.GET)
	@ApiOperation(value = "Get all doc type names", notes = "Returns list of all doc type names")
	public List<String> getAllDocTypeNames() {
		return docTypeService.getAllDocTypeNames();
	}

	@RequestMapping(path = "/names-comments", method = RequestMethod.GET)
	@ApiOperation(value = "Get doc type names and comments", notes = "Returns names and comments of all doc types")
	public List<DocTypeForClient> getDocTypeNamesAndCommentsForClient() {
		return docTypeService.getDocTypeNamesAndCommentsForClient();
	}

	@RequestMapping(path = "/containing/{docTypeText}", method = RequestMethod.GET)
	@ApiOperation(value = "Get document types containing text", notes = "Returns list of document types containing passed String")
	public List<DocTypeForClient> getDocTypeForClientContaining(@PathVariable String docTypeText) {
		return docTypeService.getDocTypeNamesAndCommentsForClientContaining(docTypeText);
	}
	
	@RequestMapping(path = "/{docTypeName}", method = RequestMethod.GET)
	@ApiOperation(value = "Get doc type", notes = "Returns doc type name and comment by doc type name")
	public DocTypeForClient getDocTypeNameAndCommentForClient(@PathVariable String docTypeName) {
		return docTypeService.getDocTypeNameAndCommentForClient(docTypeName);
	}

	@RequestMapping(method = RequestMethod.POST)
	@ApiOperation(value = "Create doc type", notes = "Creates doc type with data")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<String> saveRole(@ApiParam(required = true) @Valid @RequestBody final NewDocType newDocType) {
		
		if(docTypeService.findByDocTypeName(newDocType.getId())== null) {
			LOGGER.info("Action by {}. Created document type: {}",
					SecurityContextHolder.getContext().getAuthentication().getName(), newDocType.getId());
			docTypeService.saveDocType(newDocType);

			return new ResponseEntity<String>("Saved succesfully", HttpStatus.CREATED);

		} else {
			LOGGER.warn("Action by {}. Document type {} is not created",
					SecurityContextHolder.getContext().getAuthentication().getName(), newDocType.getId());
			return new ResponseEntity<String>("Failed to create document type", HttpStatus.CONFLICT);

		}

	}
	
	@RequestMapping(path = "/update-comment/{docTypeName}", method = RequestMethod.PUT)
	@ApiOperation(value = "Update document type comment", notes = "Update document type comment")
	public void updateDocTypeComment(@ApiParam(required = true) @PathVariable String docTypeName,
			@Valid @RequestBody final DocTypeComment docTypeComment) {
		 docTypeService.updateDocTypeComment(docTypeName, docTypeComment);
		 
		 LOGGER.info("Action by {}. Updated document type comment for document type: {}",
					SecurityContextHolder.getContext().getAuthentication().getName(), docTypeName);

	}

	@RequestMapping(method = RequestMethod.DELETE)
	@ApiOperation(value = "Deletes doc types by name", notes = "Usefull for testing")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteRoleByName(@RequestParam final String docTypeName) {
		docTypeService.deleteDocTypByName(docTypeName);
	}

	@RequestMapping(path = "/comment", method = RequestMethod.DELETE)
	@ApiOperation(value = "Deletes doctypes by comment", notes = "Usefull for testing")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteRolesByComment(@RequestParam final String comment) {
		docTypeService.deleteDocTypesByComment(comment);

	}

}
