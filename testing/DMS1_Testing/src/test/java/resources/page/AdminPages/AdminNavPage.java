package resources.page.AdminPages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import resources.page.AbstractPage;

public class AdminNavPage extends AbstractPage {
	

	//buttons
	@FindBy(id = "adminUserNav")
	private WebElement buttonUsers;
	
	@FindBy(id = "adminDocumentNav")
	private WebElement buttonDocTypes;
	
	@FindBy(id = "adminGroupNav")
	private WebElement buttonGroups;
	
	@FindBy(id = "adminLogoutNav")
	private WebElement buttonLogout;
	
		
	
	public AdminNavPage(WebDriver driver) {
		super(driver);
	}
	
	private void waitForClickable(WebElement element) {
		new WebDriverWait(driver, 10).until(ExpectedConditions.elementToBeClickable(element));
	}
	
	
	public void clickButtonUsers() {
		waitForClickable(buttonUsers);
		buttonUsers.click();
	}
	
	public void clickButtonDocTypes() {
		waitForClickable(buttonDocTypes);
		buttonDocTypes.click();
	}
	
	public void clickButtonGroups() {
		waitForClickable(buttonGroups);
		buttonGroups.click();
	}
	
	public void clickButtonLogout() {
		waitForClickable(buttonLogout);
		buttonLogout.click();
	}

	//getters
	
	public WebElement getButtonUsers() {
		return buttonUsers;
	}


	public WebElement getButtonDocuments() {
		return buttonDocTypes;
	}


	public WebElement getButtonGroups() {
		return buttonGroups;
	}


	public WebElement getButtonLogout() {
		return buttonLogout;
	}



}
