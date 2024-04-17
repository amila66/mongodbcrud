import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

//can't update data from postman
export async function PUT(request, {params}){
    const {id} = params;
    const {newTitle: title,newDescription: description} = await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id,{title,description});
    return NextResponse.json({messag: "topc updated"},{status:200});
}

export async function GET(request,{params}){
    const{id} = params;
    await connectMongoDB();
    const topic = await Topic.findOne({_id: id});
    return NextResponse.json({topic},{status:200});
}