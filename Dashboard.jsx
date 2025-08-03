import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-5 min-h-screen">
      <div className="col-span-1 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">FuelCore ERP</h2>
        <ul className="space-y-2">
          <li className="font-semibold">DASHBOARD</li>
          <li>JOBS</li>
          <li>SHIPMENT TRACKING</li>
          <li>SLA</li>
          <li>INVOICES</li>
        </ul>
      </div>
      <div className="col-span-4 p-6 space-y-6">
        <Card>
          <CardContent className="p-4 space-y-4">
            <h3 className="text-lg font-semibold">Job & File Creation</h3>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <Label>Job Number</Label>
                <Input placeholder="Auto-generated" disabled />
              </div>
              <div>
                <Label>Type</Label>
                <Input placeholder="Import / Export / Bunker" />
              </div>
              <div>
                <Label>Customer</Label>
                <Input placeholder="Client Name" />
              </div>
              <div className="flex items-end">
                <Button>Create</Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label>Shipper</Label>
                <Input />
              </div>
              <div>
                <Label>Consignee</Label>
                <Input />
              </div>
              <div>
                <Label>Port</Label>
                <Input />
              </div>
            </div>
            <Button variant="outline">Upload File</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
