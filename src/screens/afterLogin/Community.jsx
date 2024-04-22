import React from 'react';
import './styles/community.css'; // Import the CSS file

export default function Community() {
    return (
        <div className='community-container'>
            <h1>Welcome to Our Community Hub</h1>
            <div className="content">
                <RiderStories />
                <ForumSection />
                <UpdatesSection />
            </div>
        </div>
    );
}

// Component for displaying rider stories
function RiderStories() {
    const stories = [
        { id: 1, name: "Alice Johnson", story: "Had a fantastic ride to the airport. The driver was punctual and courteous, making a stressful day much easier!" },
        { id: 2, name: "Dhruv Sharma", story: "The app made it so easy to find a ride late at night. Safe and reliable—highly recommend!" },
        { id: 3, name: "Elena Smith", story: "Love the community feel of this service. The drivers are always friendly and professional." }
    ];

    return (
        <section>
            <h2>Rider Stories</h2>
            <div className='rider-stories'>
                {stories.map((story) => (
                    <div key={story.id} className='story'>
                        <p><strong>{story.name}</strong> says:</p>
                        <blockquote>"{story.story}"</blockquote>
                    </div>
                ))}
            </div>
        </section>
    );
}

// Component for forums and discussions
function ForumSection() {
    // Slack invitation link
    const slackInviteLink = "https://join.slack.com/t/tagalongdiscu-q8m1415/shared_invite/zt-2h6w4c4t2-7N6TJO2FG8IxfzCayI~RAQ";

    return (
        <section>
            <h2>Forums and Discussions</h2>
            <p>Join the discussions on our latest topics in our dedicated Slack channels.</p>
            <a href={slackInviteLink} target="_blank" rel="noopener noreferrer" className="slack-invite-button">
                Join Us on Slack
            </a>
        </section>
    );
}

// Component for updates and announcements
function UpdatesSection() {
    return (
        <section>
            <h2>Updates and Announcements</h2>
            <ul>
                <li>New app features coming this Fall!</li>
                <li>Important updates to our privacy policy.</li>
            </ul>
        </section>
    );
}
