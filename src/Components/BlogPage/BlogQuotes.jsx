import React from 'react';
import { ArrowRightCircle, Mail, MessageSquare, User } from 'react-feather';

const BlogQuotes = () => {
    return (
        <>
            <div class="card quotesCard mb-3">
                <div class="card-header text-light f18">
                    Request a Free Quote
                </div>

                <div className="card-body">
                    <form>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">
                                <User />
                            </span>
                            <input type="text" class="form-control borderRemove" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">
                                <Mail />
                            </span>
                            <input type="text" class="form-control borderRemove" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="countryName" aria-label="countryName" aria-describedby="basic-addon1" />
                        </div>


                        <div class="input-group mb-3">
                            <select class="form-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>


                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">
                                <MessageSquare />
                            </span>
                            <textarea class="form-control borderRemove" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                        </div>

                        <button type="submit" class="btn submitBtn">Submit <ArrowRightCircle className='ms-3' /></button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default BlogQuotes
