
export const addApplication = (Volunteer, newAppli) => {
    
    const applications = Volunteer.state.applied_posts;
    
    const application = {
        name: newAppli.name,
        description: newAppli.description,
        requirement: newAppli.requirement,
        title: newAppli.title,
        status: newAppli.status,
        date: newAppli.date, 
        organization:newAppli.organization, 
        id:newAppli.id,
        org_status: 'pending'};
   
    
    applications.push(application)
    Volunteer.setState({
        applied_posts: applications
    }); 
    }