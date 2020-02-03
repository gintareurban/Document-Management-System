package resources.models;

import com.thoughtworks.xstream.annotations.XStreamAlias;

@XStreamAlias("Group")
public class Group {
	
	@XStreamAlias("testDataGroup")
	private String testDataGroup;
	
	@XStreamAlias("identificator")
	private String identificator;
	
	@XStreamAlias("groupName")
	private String groupName;
	
	@XStreamAlias("comments")
	private String comments;
	

	public String getTestDataGroup() {
		return testDataGroup;
	}

	public void setTestDataGroup(String testDataGroup) {
		this.testDataGroup = testDataGroup;
	}

	public String getIdentificator() {
		return identificator;
	}

	public void setIdentificator(String identificator) {
		this.identificator = identificator;
	}

	public String getGroupName() {
		return groupName;
	}

	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}
	
	

}
