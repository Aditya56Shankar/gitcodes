import { useState } from 'react';
import { 
   Mail, Shield, 
  FileCheck, Bell 
} from 'lucide-react';
import Header from "@/components/header";
import Footer from "@/components/footer";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Switch,
} from "@/components/ui/switch";

// TypeScript interfaces
interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  content: string;
  enabled: boolean;
}

interface NotificationPreference {
  id: string;
  label: string;
  enabled: boolean;
}



const SettingsPage: React.FC = () => {
  // States for system settings
 
  const [twoFactorEnabled, setTwoFactorEnabled] = useState<boolean>(true);
  const [allowedDocTypes, setAllowedDocTypes] = useState<string[]>(["pdf", "jpg", "png"]);

  // States for email templates
  const [emailTemplates, setEmailTemplates] = useState<EmailTemplate[]>([
    {
      id: "otp",
      name: "OTP Verification",
      subject: "Your OTP Code",
      content: "Your OTP code is: {{otp}}",
      enabled: true
    },
    {
      id: "election",
      name: "Election Notification",
      subject: "New Election Announcement",
      content: "A new election {{election_name}} has been scheduled.",
      enabled: true
    },
    {
      id: "results",
      name: "Results Announcement",
      subject: "Election Results",
      content: "The results for {{election_name}} are now available.",
      enabled: true
    }
  ]);

  // States for notification preferences
  const [notificationPrefs] = useState<NotificationPreference[]>([
    { id: "welcome", label: "Send welcome email on registration", enabled: true },
    { id: "voting", label: "Send voting confirmation", enabled: true },
    { id: "admin", label: "Notify admins of new applications", enabled: true },
    { id: "results", label: "Send result announcements", enabled: true },
    { id: "reminder", label: "Send reminder before voting deadline", enabled: true }
  ]);

  const toggleTemplate = (id: string): void => {
    setEmailTemplates(templates =>
      templates.map(template =>
        template.id === id
          ? { ...template, enabled: !template.enabled }
          : template
      )
    );
  };

  const toggleDocType = (type: string): void => {
    setAllowedDocTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-6 max-w-6xl mx-auto">
        <Tabs defaultValue="security" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3">
            <TabsTrigger value="security" className="bg-green-500 text-white data-[state=active]:bg-green-700">Security</TabsTrigger>
            <TabsTrigger value="documents" className="bg-green-500 text-white data-[state=active]:bg-green-700">Documents</TabsTrigger>
            <TabsTrigger value="notifications" className="bg-green-500 text-white data-[state=active]:bg-green-700">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Security Settings
                </CardTitle>
                <CardDescription>
                  Configure authentication and security preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-500">Require 2FA for all admin actions</p>
                  </div>
                  <Switch
                    checked={twoFactorEnabled}
                    onCheckedChange={setTwoFactorEnabled}
                    className="data-[state=checked]:bg-green-500"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4" />
                  Document Settings
                </CardTitle>
                <CardDescription>
                  Manage allowed file types for uploads
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {["pdf", "jpg", "png", "doc", "docx"].map(type => (
                    <div key={type} className="flex items-center space-x-2">
                      <Switch
                        checked={allowedDocTypes.includes(type)}
                        onCheckedChange={() => toggleDocType(type)}
                        className="data-[state=checked]:bg-green-500"
                      />
                      <label className="text-sm font-medium uppercase">{type}</label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Templates
                </CardTitle>
                <CardDescription>
                  Configure email notifications and templates
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {emailTemplates.map(template => (
                  <div key={template.id} className="space-y-4 pb-4 border-b last:border-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{template.name}</h3>
                        <p className="text-sm text-gray-500">Subject: {template.subject}</p>
                      </div>
                      <Switch
                        checked={template.enabled}
                        onCheckedChange={() => toggleTemplate(template.id)}
                        className="data-[state=checked]:bg-green-500"
                      />
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm font-mono">{template.content}</p>
                    </div>
                    
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  Notification Preferences
                </CardTitle>
                <CardDescription>
                  Configure when to send automatic notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notificationPrefs.map((pref) => (
                    <div key={pref.id} className="flex items-center justify-between">
                      <span className="text-sm">{pref.label}</span>
                      <Switch 
                        defaultChecked={pref.enabled} 
                        className="data-[state=checked]:bg-green-500"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default SettingsPage;