"use client";

import { UserProfile, useUser } from "@clerk/nextjs";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfilePage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const [activeTab, setActiveTab] = useState("profile");

  if (!isLoaded) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  if (!isSignedIn) {
    return <div className="flex h-screen items-center justify-center">Please sign in to view your profile</div>;
  }

  return (
    <div className="container mx-auto px-4 py-32">
      <h1 className="mb-8 text-4xl font-bold text-white">My Profile</h1>
      
      <Tabs defaultValue="profile" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="profile">Profile Info</TabsTrigger>
          <TabsTrigger value="settings">Account Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="mt-6">
          <Card className="bg-neutral-900 text-white">
            <CardHeader>
              <CardTitle>User Profile</CardTitle>
              <CardDescription className="text-neutral-400">
                Your personal information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {user?.imageUrl && (
                <div className="mb-4">
                  <img 
                    src={user.imageUrl} 
                    alt="Profile" 
                    className="h-24 w-24 rounded-full object-cover"
                  />
                </div>
              )}
              <div>
                <p className="text-sm text-neutral-400">Name</p>
                <p className="text-xl font-medium">{user?.fullName || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-400">Email</p>
                <p className="text-xl font-medium">{user?.primaryEmailAddress?.emailAddress || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-400">Username</p>
                <p className="text-xl font-medium">{user?.username || "Not provided"}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="mt-6">
          <Card className="bg-neutral-900 text-white">
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription className="text-neutral-400">
                Manage your account details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded border border-neutral-700 p-6">
                <h3 className="mb-4 text-xl font-medium">Update Your Profile</h3>
                <p className="mb-4 text-neutral-400">
                  You can update your profile information and manage your account settings.
                </p>
                <UserProfile 
                  appearance={{
                    elements: {
                      rootBox: "mx-auto",
                      card: "bg-neutral-900 border-0 shadow-none",
                      navbar: "hidden",
                      navbarMobileMenuButton: "hidden",
                      headerTitle: "hidden",
                      headerSubtitle: "hidden"
                    }
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 